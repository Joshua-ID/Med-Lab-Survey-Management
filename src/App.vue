<template>
  <div class="app">
    <Toast position="bottom-right" />

    <router-view />
  </div>
</template>

<script setup>
import { Toast } from "primevue";
</script>
<style>
.app {
  margin: 0 auto;
}
</style>
