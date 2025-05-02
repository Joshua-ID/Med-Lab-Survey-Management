<template>
  <div class="admin-users-container">
    <h2>User Management</h2>
    <DataTable :value="users" paginator :rows="10" responsiveLayout="scroll">
      <Column field="photoURL" header="Photo">
        <template #body="slotProps">
          <img class="image" :src="slotProps.data.photoURL || defaultAvatar" />
        </template>
      </Column>
      <Column field="name" header="Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role">
        <template #body="slotProps">
          <span>{{ capitalizeRoleValue(slotProps) }}</span>
        </template>
      </Column>
      <Column field="createdAt" header="Created At"></Column>
      <Column v-if="isAdmin" header="Actions">
        <template #body="slotProps">
          <div class="actions-column">
            <SpeedDial
              :model="getActions(slotProps.data)"
              :tooltipOptions="{ position: 'left' }"
              direction="right"
            />
          </div>
        </template>
      </Column>

      <template #empty>
        <div class="table-empty-state">
          <label class="empty-state-text">No table data</label>
        </div>
      </template>
    </DataTable>

    <ConfirmationDialog
      v-model:visible="visible"
      modal-title="Delete User"
      :modal-description="formattedModalDescription"
      @confirm="deleteUser"
    />

    <Dialog v-model:visible="editDialog" header="Edit User" :modal="true">
      <div class="edit-content-wrapper">
        <InputText
          :invalid="!selectedUser.name"
          v-model="selectedUser.name"
          placeholder="Name"
        />
        <Select
          v-model="selectedUser.role"
          :options="roles"
          :disabled="!isAdmin"
          optionLabel="name"
          optionValue="value"
          checkmark
          :highlightOnSelect="false"
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
          label="Update"
          :loading="isLoading"
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
import { Column, DataTable, Select, SpeedDial } from "primevue";
import ConfirmationDialog from "../components/ConfirmationDialog.vue";

export default {
  name: "AdminUsers",
  components: {
    Column,
    DataTable,
    SpeedDial,
    Select,
    ConfirmationDialog,
  },
  data() {
    return {
      visible: false,
      defaultAvatar: "/public/default-user-icon.png",
      users: [],
      userToDelete: null,
      editDialog: false,
      selectedUser: {},
      isLoading: false,
      roles: [
        { name: "Admin", value: "admin" },
        { name: "User", value: "user" },
        { name: "Marketer", value: "marketer" },
        { name: "Editor", value: "editor" },
      ],
      isAdmin: false,
    };
  },
  computed: {
    formattedModalDescription() {
      return `Are you sure you want to delete ${this.userToDelete?.name}`;
    },
  },
  created() {
    this.fetchUsers();
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    this.isAdmin = loggedInUser && loggedInUser.role === "admin";
  },
  methods: {
    capitalizeRoleValue(slotProps) {
      const role = slotProps.data.role;
      return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
    },
    getActions(user) {
      return [
        {
          label: "Edit",
          icon: "pi pi-pencil",
          command: () => this.editUser(user),
        },
        {
          label: "Delete",
          icon: "pi pi-trash",
          command: () => {
            this.userToDelete = user;
            this.visible = true;
          },
        },
      ];
    },

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
      if (!this.selectedUser.role || !this.selectedUser.name) {
        this.$toast.add({
          severity: "error",
          summary: "Empty Fields",
          details: "Please fill in required fields!",
          life: 3000,
        });
        return;
      }

      try {
        this.isLoading = true;
        const userRef = doc(db, "users", this.selectedUser.id);
        await updateDoc(userRef, {
          name: this.selectedUser.name,
          role: this.isAdmin
            ? this.selectedUser.role
            : this.selectedUser.role.name,
          photoURL: this.selectedUser.photoURL || "",
        });
        this.$toast.add({
          severity: "success",
          summary: "Success",
          detail: "User updated!",
        });
        this.editDialog = false;
        this.fetchUsers();
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      }
      this.isLoading = false;
    },
    async deleteUser() {
      try {
        if (!this.isAdmin) {
          this.$toast.add({
            severity: "warn",
            summary: "Unauthorized",
            detail: "Only admins can delete users!",
          });
          return;
        }

        if (!this.userToDelete || !this.userToDelete.id) return;

        await deleteDoc(doc(db, "users", this.userToDelete.id));
        this.$toast.add({
          severity: "warn",
          summary: "Deleted",
          detail: "User removed!",
        });
        this.fetchUsers();
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Error",
          detail: error.message,
        });
      } finally {
        this.visible = false;
        this.userToDelete = null;
      }
    },
  },
};
</script>

<style scoped>
.admin-users-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: clamp(0.8125rem, 0.746rem + 0.2128vw, 0.9375rem);

  @media (max-width: 500px) {
    padding: 1rem;
  }

  .image {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 2px solid var(--st-surface-sleek);
    object-fit: cover;

    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
    }
  }

  .actions-column {
    display: flex;
    justify-content: start;
    align-items: center;
    height: 100%;
  }
}

.edit-content-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
