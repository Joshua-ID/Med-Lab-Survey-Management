<template>
  <h1 class="text">{{ text }}</h1>

  <InputText v-model="text" />
  <Button label="Click Me" />
</template>

<script>
export default {
  name: "HeroSection",
  components: {
    InputText,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
.text {
  color: blue;
}
</style>
