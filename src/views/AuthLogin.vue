<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Login</h2>
      <div class="auth-card">
        <FloatLabel variant="on">
          <InputText id="email" v-model="email" size="large" variant="filled" />
          <label for="email">Email</label>
        </FloatLabel>

        <FloatLabel variant="on">
          <Password
            id="password"
            size="large"
            variant="filled"
            v-model="password"
            toggleMask
          />
          <label for="password">Password</label>
        </FloatLabel>
      </div>
      <Button
        :loading="loading"
        type="submit"
        label="Login"
        class="auth-button"
        @click="login"
      />
      <span class="redirect-text">
        Don't have an account?
        <router-link class="external-link" to="/register">Sign Up</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { FloatLabel, useToast } from "primevue";

export default {
  components: { useToast, FloatLabel },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        const successMessage = this.toast.add({
          severity: "success",
          summary: "Successful Login",
          detail: "Login",
          life: 10000,
        });

        if (userSnap.exists()) {
          const userData = userSnap.data();
          localStorage.setItem("user", JSON.stringify(userData));

          if (userData.role === "admin") {
            this.$router.push("/monitoring-admin");
            successMessage;
          } else {
            this.$router.push("/dashboard");
            successMessage;
          }
        } else {
          this.toast.add({
            severity: "warn",
            summary: "Error",
            detail: "User data not found!",
            life: 3000,
          });
        }
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: "Login Failed",
          detail: error.message,
          life: 3000,
        });
      } finally {
        this.loading = false;
        return;
      }
    },
  },
};
</script>
<style>
.p-inputtext {
  width: 100%;
}
</style>
