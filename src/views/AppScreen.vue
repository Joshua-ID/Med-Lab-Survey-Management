<template>
  <div class="app-screen">
    <HeaderNavigator />
    <slot name="appPage"></slot>
  </div>
</template>

<script>
import HeaderNavigator from "../components/HeaderNavigator.vue";

export default {
  name: "AppScreen",
  components: { HeaderNavigator },

  data() {
    return {};
  },
};
</script>

<style scoped>
.app-screen {
}
</style>
