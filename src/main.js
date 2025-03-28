import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primevue/themes/aura";
import "./style.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { definePreset } from "@primevue/themes";
import router from "./router/index.js"; // Import router

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: { surface: { background: "#043873", text: "{purple.200}" } },
      dark: { surface: { background: "#FF5758", text: "{blue.900}" } },
    },
  },
});

app.use(router); // Use router

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: MyPreset,
    options: {
      prefix: "st",
      darkModeSelector: ".dark",
    },
  },
});

// Register components globally
app.component("Button", Button);
app.component("InputText", InputText);

app.mount("#app");
