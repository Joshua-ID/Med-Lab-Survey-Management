import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Material from "@primevue/themes/nora";
import "./style.css";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Material,
    options: {
      prefix: "h",
      darkModeSelector: "dark" || "system",
    },
  },
});

// register component globally
app.component("Button", Button);
app.component("InputText", InputText);

app.mount("#app");
