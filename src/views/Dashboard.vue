<template>
  <!-- <div class="dashboard-container"> -->
  <!-- <div class="dashboard-card">
      <h1>Welcome to Your Dashboard</h1>
      <p>
        Your Role: <strong>{{ user.role }}</strong>
      </p> -->
  <!-- <StaffUsers />
      <DoctorsStaff /> -->
  <!-- <PatientControl /> -->
  <!-- </div>
    <Button label="Logout" class="logout-button" @click="logout" /> -->
  <!-- </div> -->
  <div class="user-dashboard-container">
    <AppScreen>
      <template #appPage>
        <StaffUsers />
      </template>
    </AppScreen>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
    <h1>User</h1>
  </div>
</template>

<script>
import DoctorsStaff from "./DoctorsStaff.vue";
import PatientControl from "./PatientControl.vue";
import AppScreen from "./AppScreen.vue";
import StaffUsers from "../views/StaffUsers.vue";

export default {
  components: { AppScreen, StaffUsers, DoctorsStaff, PatientControl },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
};
</script>
