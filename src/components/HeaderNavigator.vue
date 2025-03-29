<template>
  <div class="header-container">
    <AppDrawer />
    <div class="avatar-and-theme">
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />

      <LogoutButton />
      <ToggleMoodComponent />
    </div>
  </div>
</template>

<script>
import { Avatar } from "primevue";
import AppDrawer from "../components/AppDrawer.vue";

import ToggleMoodComponent from "../components/toggleMoodComponent.vue";
import LogoutButton from "./LogoutButton.vue";

export default {
  name: "HeaderNavigator",
  components: {
    ToggleMoodComponent,
    Avatar,
    AppDrawer,
    LogoutButton,
  },
  data() {
    return {
      displayModal: false,
    };
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

  .avatar-and-theme {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    align-items: center;
  }
}
</style>
