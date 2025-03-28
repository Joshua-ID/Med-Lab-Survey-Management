<template>
  <div class="dashboard-container">
    <div class="dashboard-card">
      <h1>Welcome to Your Dashboard</h1>
      <p>
        Your Role: <strong>{{ user.role }}</strong>
      </p>
      <Button label="Logout" class="logout-button" @click="logout" />
    </div>
  </div>
</template>

<script>
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
  methods: {
    async logout() {
      await signOut(auth);
      localStorage.clear();
      this.$router.push("/auth-login");
    },
  },
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f7fc;
}
.dashboard-card {
  background: white;
  padding: 30px;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.logout-button {
  background: #dc3545;
  color: white;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.logout-button:hover {
  background: #c82333;
}
</style>
