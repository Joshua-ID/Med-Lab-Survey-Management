<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Register</h2>
      <div class="auth-card">
        <InputText
          v-model="email"
          size="large"
          placeholder="Enter your email"
          variant="filled"
        />

        <Password
          size="large"
          placeholder="Enter your password"
          variant="filled"
          v-model="password"
          promptLabel="Choose a password"
          strongLabel="Strong password"
          toggleMask
        />
      </div>
      <Button
        :loading="loading"
        type="submit"
        label="Register"
        class="auth-button"
        @click="register"
      />
      <span class="redirect-text">
        Already have an account?
        <router-link class="external-link" to="/auth-login">Login</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useToast } from "primevue";

export default {
  name: "Register",
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
    async register() {
      this.loading = true;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );
        const user = userCredential.user;

        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          role: "user",
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ email: user.email, role: "user" })
        );
        this.$router.push("/dashboard");
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
          summary: "Registration Successful",
          detail: "Login",
          life: 10000,
        });
        this.loading = false;
      }
    },
  },
};
</script>
<style>
.password-input {
  width: 100%;
}
</style>
