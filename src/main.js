import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primevue/themes/aura";
import "./style.css";
import "primeicons/primeicons.css";

import { definePreset } from "@primevue/themes";
import router from "./router/index.js"; // Import router
import {
  Password,
  Toast,
  Button,
  InputText,
  ToastService,
  Dialog,
} from "primevue";
const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          background: "#58508d",
          secondary: " #58508d",
          text: "#141B41",
          sleek: "#918EF4",
          standard: "{violet.700}",
        },
      },
      dark: {
        surface: {
          background: "#321d7c",
          secondary: "{slate.50}",
          text: "{slate.300}",
          sleek: "#918EF4",
          standard: "{violet.700}",
        },
      },
    },
  },
});

app.use(router); // Use router
app.use(ToastService); //user toast service

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
app.component("Password", Password);
app.component("Toast", Toast);
app.component("Dialog", Dialog);

app.mount("#app");
