<template>
  <Button label="Logout" class="logout-button" @click="visible = !visible" />

  <Dialog v-model:visible="visible" modal header="Logout Account">
    <div class="logout-dialog">
      <span>Are you sure you want to Logout?</span>

      <div class="confirm-logout-btn">
        <Button
          class="action-btn"
          type="button"
          label="No"
          severity="secondary"
          raised
          variant="outlined"
          @click="visible = false"
        ></Button>
        <Button
          class="action-btn"
          severity="danger"
          type="button"
          raised
          label="Yes"
          @click="logout"
        />
      </div>
    </div>
  </Dialog>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export default {
  name: "LogoutButton",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    async logout() {
      this.visible = false;
      await signOut(auth);
      localStorage.clear();
      this.$router.push("/auth-login");
    },
  },
};
</script>
<style>
.logout-dialog {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .confirm-logout-btn {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;

    .action-btn {
      width: 120px;
    }
  }
}
</style>
