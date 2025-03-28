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

export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
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
          alert("User data not found!");
        }
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
