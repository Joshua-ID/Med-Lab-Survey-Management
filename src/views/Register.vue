<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Register</h2>
      <div class="auth-card">
        <FloatLabel variant="on">
          <InputText
            id="username"
            v-model="username"
            size="large"
            variant="filled"
          />
          <label for="username">Full Name</label>
        </FloatLabel>
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
            promptLabel="Choose a password"
            strongLabel="Strong password"
            toggleMask
          />
          <label for="password">Password</label>
        </FloatLabel>
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
import { FloatLabel, useToast } from "primevue";

export default {
  name: "Register",
  components: { useToast, FloatLabel },
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      username: "",
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
          name: this.username,
          role: "User",
          email: user.email,
          createdAt: new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          }),
        });

        localStorage.setItem(
          "user",
          JSON.stringify({ email: user.email, role: "User", name: user.name })
        );
        this.$router.push("/dashboard");
        this.toast.add({
          severity: "success",
          summary: "Registration Successful",
          detail: "Register",
          life: 10000,
        });
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: "Registration Failed",
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
