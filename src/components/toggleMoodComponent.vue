<template>
  <ToggleSwitch aria-label="toggle display color" />
</template>

<script>
import { ToggleSwitch } from "primevue";

export default {
  name: "toggleMoodComponent",
  components: {
    ToggleSwitch,
  },
  data() {
    return {
      darkMood: false,
      toggleMood: false,
    };
  },
  methods: {
    // Apply the theme by adding/removing classes on the body
    applyTheme() {
      if (this.darkMood) {
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
      this.toggleMood = savedTheme === "dark";
    } else {
      this.darkMood = systemPreference;
      this.toggleMood = systemPreference;
    }

    // Apply the theme on page load
    this.applyTheme();
  },
};
</script>
<style></style>
