<template>
  <div id="section" class="hero-section">
    <h1 class="text">Color Test</h1>

    <InputText v-model="text" />
  </div>
</template>

<script>
export default {
  name: "HeroSection",

  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
.text {
  color: var(--primary-background);
}
.change {
  background-color: var(--h-red-600);
}

.hero-section {
  background-image: url("../assets/svgs/Element.svg");
  /* background-color: var(--st--surface-100); */
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 80vh;
}
</style>
