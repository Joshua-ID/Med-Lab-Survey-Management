<template>
  <div class="user-dashboard-container">DASHBOARD USER</div>
</template>

<script>
import DoctorsStaff from "./DoctorsView.vue";
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
