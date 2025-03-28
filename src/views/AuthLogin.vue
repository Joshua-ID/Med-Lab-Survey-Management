<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Login</h2>
      <div class="auth-card">
        <InputText
          v-model="email"
          size="large"
          placeholder="Enter your email"
          class="input-field"
          variant="filled"
        />

        <Password
          size="large"
          placeholder="Enter your password"
          variant="filled"
          v-model="password"
          toggleMask
        />
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
import { useToast } from "primevue";

export default {
  components: { useToast },
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

        if (userSnap.exists()) {
          const userData = userSnap.data();
          localStorage.setItem("user", JSON.stringify(userData));

          if (userData.role === "admin") {
            this.$router.push("/admin");
          } else {
            this.$router.push("/dashboard");
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
        this.toast.add({
          severity: "success",
          summary: "Successful Login",
          detail: "Login",
          life: 10000,
        });
        this.loading = false;
      }
    },
  },
};
</script>
