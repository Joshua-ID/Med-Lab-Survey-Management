<template>
  <div class="container-wrap">
    <div class="hero-section">
      <div class="left-content"></div>
      <div class="vector-clip-container">
        <img class="vector-image" src="../assets/svgs/doctors.png" />
      </div>
    </div>
    <img class="background-clip" src="../assets/svgs/Element.svg" />
  </div>
</template>

<script>
export default {
  name: "HeroSection",

  data() {
    return {};
  },
};
</script>

<style scoped>
.container-wrap {
  background-color: var(--st-surface-background);
  position: relative;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;

  .background-clip {
    width: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-size: contain;
    top: 20%;
    left: 0;
  }

  .hero-section {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    max-width: 1440px;

    /* .left-content {
      width: 100%;
      height: 120px;
    } */

    .vector-clip-container {
      position: relative;
      width: 100%;
      height: 700px;
      border-radius: 50%;
      border: 5px solid #fff;
      overflow: hidden;
    }

    .vector-image {
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1000;
      width: 100%;
      height: auto;
    }
  }
}
</style>
