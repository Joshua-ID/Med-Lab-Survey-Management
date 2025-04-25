<template>
  <div class="not-found-container">
    <div class="left-wrapper">
      <img src="../assets/svgs/not-found-icon.png" />
      <h1>404</h1>
    </div>
    <div class="right-wrapper">
      <h1 class="title">Oops! The page you are looking for does not exist.</h1>
      <router-link
        class="nav-link"
        :to="{ path: userRole === 'admin' ? 'monitoring-admin' : 'dashboard' }"
      >
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

  computed: {
    userRole() {
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user.role : null;
    },
  },
};
</script>

<style scoped>
.not-found-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 3rem;
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
    color: var(--primary);
  }

  .right-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4rem;

    .title {
      font-size: clamp(1.25rem, 1.0714rem + 0.8929vw, 1.875rem);
      display: flex;
      text-align: start;
    }
  }

  .nav-link {
    width: fit-content;
    text-decoration: none;
    color: var(--text);
    font-size: clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
    background-color: var(--primary);
    color: #fff;

    &:hover {
      background-color: var(--sleek-color);
      transform: scale(1.05);
    }
  }
}
</style>
