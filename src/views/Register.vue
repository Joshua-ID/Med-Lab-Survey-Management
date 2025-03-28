<template>
  <div class="auth-container">
    <div class="auth-form">
      <h2>Register</h2>
      <div class="auth-card">
        <InputText
          v-model="email"
          size="large"
          placeholder="Enter your email"
          class="input-field"
          variant="filled"
        />

        <InputText
          v-model="password"
          size="large"
          type="password"
          placeholder="Enter your password"
          class="input-field"
          variant="filled"
        />
      </div>
      <Button type="submit" label="Login" class="auth-button" @click="login" />
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

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
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
        alert(error.message);
      }
    },
  },
};
</script>
