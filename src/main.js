import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primevue/themes/aura";
import "./style.css";
import "primeicons/primeicons.css";

import { definePreset } from "@primevue/themes";
import router from "./router/index.js"; // Import router
import { Password, Toast, Button, InputText, ToastService } from "primevue";

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

app.mount("#app");
