<template>
  <div class="cookies-banner" v-if="showBanner">
    <p class="ctx-text">
      We use cookies to enhance your experience. By continuing to visit this
      site, you agree to our use of cookies.
    </p>
    <div class="ctx-btns-wrapper">
      <Button class="ctx-btn" @click="acceptCookie">Accept All</Button>
      <Button class="ctx-btn" @click="declineCookies">Reject</Button>
    </div>
  </div>
</template>

<script>
import { Button } from "primevue";

export default {
  name: "CookiesBanner",
  components: { Button },
  data() {
    return {
      showBanner: false,
    };
  },
  methods: {
    acceptCookie() {
      this.showBanner = false;
      localStorage.setItem("cookiesAccepted", "true");
      this.$toast.add({
        severity: "success",
        summary: "Cookies Accepted",
        detail: "You have accepted the use of cookies.",
        life: 3000,
      });
    },
    declineCookies() {
      this.showBanner = false;
      localStorage.setItem("cookiesAccepted", "false");
      this.$toast.add({
        severity: "warn",
        summary: "Cookies Declined",
        detail: "No cookies is set yet.",
        life: 3000,
      });
    },
  },

  mounted() {
    const getCookies = localStorage.getItem("cookiesAccepted");

    setTimeout(() => {
      // Check if the user has already accepted or declined cookies
      if (getCookies === "true") {
        return;
      }
      this.showBanner = true;
    }, 7000);
  },

  updated() {
    const getCookies = localStorage.getItem("cookiesAccepted");
    setTimeout(() => {
      // Check if the user has already accepted or declined cookies
      if (getCookies === "true") {
        return;
      }
      this.showBanner = true;
    }, 150000);
  },
};
</script>
<style>
.cookies-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: var(--st-surface-sleek);
  padding: 2rem;
  z-index: 1000;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .ctx-text {
    color: var(--white);
    font-size: clamp(0.8125rem, 0.7128rem + 0.3191vw, 1rem);
    max-width: 500px;
    width: 100%;
  }

  .ctx-btns-wrapper {
    display: flex;
    gap: 1rem;

    @media (max-width: 600px) {
      flex-direction: column;
      gap: 0.5rem;
    }

    @media (max-width: 500px) {
      flex-direction: row;
      gap: 0.5rem;
    }

    .ctx-btn {
      font-size: clamp(0.8125rem, 0.7128rem + 0.3191vw, 1rem);
      background-color: var(--st-surface-secondary);
      border: none;
      outline: none;
      min-width: 100px;
    }
  }
}
</style>
