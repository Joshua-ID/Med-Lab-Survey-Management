// import { createApp } from "vue";
import "./style.css";
// import App from "./App.vue";
// import PrimeVue from "primevue/config";

// const app = createApp(App);

// app.use(PrimeVue, {
//   theme: {
//     preset: app,
//   },
// });

import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
// import "primevue/resources/primevue.min.css"; // ✅ Core PrimeVue styles
// import "primeicons/primeicons.css"; // ✅ Prime Icons
// import "primeuix/themes/lara-dark-purple/theme.css"; // Dark Theme */
import "primevue/themes/lara-dark-purple/theme.css"; // Dark Theme */

const app = createApp(App);

app.use(PrimeVue); // ✅ Register PrimeVue globally

app.mount("#app"); // ✅ Mount the Vue app
