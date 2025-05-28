<template>
  <div class="header-container">
    <AppDrawer />
    <div class="avatar-and-theme">
      <Avatar
        v-tooltip.bottom="{ value: userName, autoHide: false, hideDelay: 300 }"
        :image="userPhoto"
        shape="circle"
      />

      <Button label="Logout" class="logout-button" @click="openModal" />
      <ToggleMoodComponent />
    </div>
    <ConfirmationDialog
      v-model:visible="visible"
      modal-title="Logout"
      modalDescription="Are you sure you want to logout"
      @confirm="handleLogout"
    />
  </div>
</template>

<script>
import { Avatar } from "primevue";
import AppDrawer from "../components/AppDrawer.vue";
import ToggleMoodComponent from "../components/toggleMoodComponent.vue";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import ConfirmationDialog from "./ConfirmationDialog.vue";

export default {
  name: "HeaderNavigator",
  components: {
    ToggleMoodComponent,
    Avatar,
    AppDrawer,
    ConfirmationDialog,
  },
  data() {
    return {
      visible: false,
      defaultAvatar: "../assets/svgs/default-user-icon.png",
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    async handleLogout() {
      this.visible = false;
      await signOut(auth);
      localStorage.clear();
      this.$router.push("/auth-login");
    },
  },
  created() {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    this.userPhoto = storedUser?.photoURL || this.defaultAvatar;
    this.userName = storedUser?.name || "Guest";
  },
};
</script>

<style>
.header-container {
  background: var(--st-surface-standard);
  padding: 1rem 2rem;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: -10px;
  z-index: 1000;
  box-shadow: var(--shadow);

  @media (max-width: 500px) {
    padding: 1rem;
  }

  .avatar-and-theme {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
  }
}
</style>
