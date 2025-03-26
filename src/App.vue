<template>
  <div class="app">
    <HeaderNavigator />
    <HeroSection />
  </div>
</template>

<script setup>
import HeaderNavigator from "./views/HeaderNavigator.vue";
import HeroSection from "./views/HeroSection.vue";
</script>
<style>
.app {
  margin: 0 auto;
}
</style>
