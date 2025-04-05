<template>
  <div class="app">
    <HeaderNavigator
      v-if="!$route.path === '/med-lab-survey'"
      v-show="!disableNavigator"
    />
    <Toast position="bottom-right" />
    <router-view />
  </div>
</template>

<script>
import { Toast } from "primevue";
import HeaderNavigator from "./components/HeaderNavigator.vue";

export default {
  name: "app",
  components: { Toast, HeaderNavigator },
  data() {
    return {
      disableNavigator: false,
      isHomePage: true,
    };
  },

  watch: {
    $route: {
      immediate: true, // Run on initial page load
      handler(to) {
        // List of routes where the HeaderNavigator should be hidden
        const hiddenRoutes = ["/auth-login", "/register"];
        this.disableNavigator = hiddenRoutes.includes(to.path);
      },
    },
  },
};
</script>
<style>
.app {
  margin: 0 auto;
}
</style>
