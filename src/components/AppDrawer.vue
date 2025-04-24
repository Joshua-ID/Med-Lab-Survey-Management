<template>
  <Drawer
    class="drawer-container"
    v-model:visible="visible"
    header="Med Lab Survery"
  >
    <div class="drawer-content">
      <div class="list-item">
        <router-link
          :to="{
            path: userRole === 'admin' ? 'monitoring-admin' : 'dashboard',
          }"
          class="item"
        >
          <i class="pi pi-objects-column"></i>
          <span @click="dashboard">{{
            userRole === "admin" ? "Data Analysis" : "Overview"
          }}</span>
        </router-link>
        <router-link :to="{ path: 'patient' }" class="item">
          <i class="pi pi-truck"></i>
          <span @click="addPatient">Patient</span>
        </router-link>
        <router-link :to="{ path: 'view-staff' }" class="item">
          <i class="pi pi-users"></i>
          <span @click="viewStaff">Staff Members</span>
        </router-link>
        <router-link :to="{ path: 'view-doctor' }" class="item">
          <i class="pi pi-user"></i>
          <span>Medical Staff</span>
        </router-link>
        <router-link :to="{ path: 'admin-users' }" class="item">
          <i class="pi pi-warehouse"></i>
          <span>User Account</span>
        </router-link>
      </div>

      <LogoutButton />
    </div>
  </Drawer>
  <Button icon="pi pi-list" @click="visible = true" size="medium" raised />
</template>

<script>
import { Drawer } from "primevue";
import LogoutButton from "./LogoutButton.vue";

export default {
  name: "AppDrawer",
  components: { Drawer, LogoutButton },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    userRole() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user.role : null;
    },
  },
};
</script>
<style>
.drawer-container {
  border: none;
  padding: 0;
  outline: 0;
}

.drawer-content {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  .list-item {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      gap: 10px;
      padding: 1rem;
      border-radius: 15px;
      cursor: pointer;
      text-decoration: none;
      color: var(--st-surface-text);
      transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

      &:hover {
        background-color: aliceblue;
        transform: translateY(-2px) scale(1.05);
      }
    }
  }
}
</style>
