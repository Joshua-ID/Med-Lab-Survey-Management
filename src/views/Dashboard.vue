<template>
  <!-- <StaffUsers />
      <DoctorsStaff /> -->
  <!-- <PatientControl /> -->

  <div class="user-dashboard-container">DASHBOARD</div>
</template>

<script>
import DoctorsStaff from "./DoctorsStaff.vue";
import PatientControl from "./PatientControl.vue";
import StaffUsers from "../views/StaffUsers.vue";

export default {
  components: { StaffUsers, DoctorsStaff, PatientControl },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
};
</script>
