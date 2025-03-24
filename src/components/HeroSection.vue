<template>
  <h1 class="text">{{ text }}</h1>

  <InputText v-model="text" />
  <Button class="change" label="Click Me" />
  <Button label="Toggle Dark Mode" @click="clickToggleMood()" />
</template>

<script>
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
  name: "HeroSection",
  components: {
    InputText,
    Button,
  },
  data() {
    return {
      text: "",
      darkMood: false,
    };
  },

  methods: {
    // Apply the theme by adding/removing classes on the body
    applyTheme() {
      if (!this.darkMood) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
      localStorage.setItem("theme", this.darkMood ? "dark" : "light"); // Save the theme preference in localStorage
    },

    // Toggle dark mode
    clickToggleMood() {
      this.darkMood = !this.darkMood;
      this.applyTheme(); // Apply the theme when toggled
    },
  },

  created() {
    // Check system theme on page load and set it accordingly
    const systemPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set the theme to system default if no user preference is saved
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.darkMood = savedTheme === "dark";
    } else {
      this.darkMood = systemPreference;
    }

    // Apply the theme on page load
    this.applyTheme();
  },
};
</script>

<style>
.text {
  color: yellow;
}
.change {
  background-color: var(--h-red-600);
}
</style>
