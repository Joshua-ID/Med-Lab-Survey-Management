import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primevue/themes/aura";
import "./style.css";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

const MyPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      light: {
        surface: {
          background: "#043873",
          text: "{purple.200}",
          800: "{purple.800}",
          900: "{purple.900}",
          950: "{purple.950}",
        },
      },
      dark: {
        surface: {
          background: "#FF5758",
          text: "{blue.900}",
          800: "{blue.800}",
          900: "{blue.900}",
          950: "{blue.950}",
        },
      },
    },
  },
});

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

// register component globally
app.component("Button", Button);
app.component("InputText", InputText);

app.mount("#app");
