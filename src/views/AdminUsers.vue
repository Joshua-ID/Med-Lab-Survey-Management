<template>
  <div class="admin-users-container">
    <h2>User Management</h2>
    <DataTable :value="users" paginator :rows="10" responsiveLayout="scroll">
      <Column field="photoURL" header="Photo">
        <template #body="slotProps">
          <img class="image" :src="slotProps.data.photoURL" />
        </template>
      </Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role"></Column>
      <Column v-if="isAdmin" header="Actions">
        <template #body="slotProps">
          <Button
            icon="pi pi-pencil"
            class="p-button-warning"
            @click="editUser(slotProps.data)"
          />
          <Button
            icon="pi pi-trash"
            class="p-button-danger"
            @click="deleteUser(slotProps.data.id)"
          />
        </template>
      </Column>
    </DataTable>

    <Dialog v-model:visible="editDialog" header="Edit User" :modal="true">
      <div>
        <InputText
          :invalid="!selectedUser.name"
          v-model="selectedUser.name"
          placeholder="Name"
        />
        <Dropdown
          v-model="selectedUser.role"
          :options="roles"
          placeholder="Select Role"
          :disabled="!isAdmin"
        />
        <InputText v-model="selectedUser.photoURL" placeholder="Photo URL" />
      </div>
      <template #footer>
        <Button
          label="Cancel"
          icon="pi pi-times"
          class="p-button-text"
          raised
          @click="editDialog = false"
        />
        <Button
          label="Save"
          icon="pi pi-check"
          class="p-button-success"
          :disabled="!selectedUser.name"
          raised
          @click="updateUser"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { Column, DataTable, Dialog } from "primevue";
import { useToast } from "primevue/usetoast";

export default {
  name: "AdminUsers",
  components: { Column, DataTable, Dialog },
  data() {
    return {
      users: [],
      editDialog: false,
      selectedUser: {},
      roles: ["admin", "user"],
      toast: useToast(),
      isAdmin: false,
    };
  },
  created() {
    this.fetchUsers();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    this.isAdmin = loggedInUser && loggedInUser.role === "admin";
  },
  methods: {
    async fetchUsers() {
      const querySnapshot = await getDocs(collection(db, "users"));
      this.users = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.editDialog = true;
    },
    async updateUser() {
      try {
        const userRef = doc(db, "users", this.selectedUser.id);
        await updateDoc(userRef, {
          name: this.selectedUser.name,
          //   role: this.isAdmin ? this.selectedUser.role : undefined,
          photoURL: this.selectedUser.photoURL,
        });
        this.toast.add({
          severity: "success",
          summary: "Success",
          detail: "User updated!",
        });
        this.editDialog = false;
        this.fetchUsers();
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      }
    },
    async deleteUser(id) {
      try {
        if (!this.isAdmin) {
          this.toast.add({
            severity: "warn",
            summary: "Unauthorized",
            detail: "Only admins can delete users!",
          });
          return;
        }
        await deleteDoc(doc(db, "users", id));
        this.toast.add({
          severity: "warn",
          summary: "Deleted",
          detail: "User removed!",
        });
        this.fetchUsers();
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      }
    },
  },
};
</script>

<style scoped>
.admin-users-container {
  padding: 2rem;

  .image {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid var(--st-surface-sleek);
    object-fit: cover;
  }
}
</style>
