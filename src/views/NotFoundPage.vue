<template>
  <div class="not-found-container">
    <div class="left-wrapper">
      <img src="../assets/svgs/not-found-icon.png" />
      <h1>404</h1>
    </div>
    <div class="right-wrapper">
      <h1>Oops! The page you are looking for does not exist.</h1>
      <router-link to="/">
        <span class="back-to-home">
          <i class="pi pi-arrow-left"></i> Go back to Home
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: space-between;

  padding: 2rem;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 2rem;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 650px) {
    padding: 0.5rem 1rem;
  }
  @media (max-width: 450px) {
    padding: 0.2rem 0.8rem;
  }

  h1 {
    font-size: 5rem;
    color: #ff6f61;
  }

  p {
    font-size: clamp(1rem, 0.4681rem + 1.7021vw, 2rem);
    margin: 20px 0;
  }

  .back-to-home {
    text-decoration: none;
    color: #007bff;

    .fa-solid {
      display: none;
    }

    &:hover .fa-solid {
      display: inline-block;
    }
  }
}
</style>
