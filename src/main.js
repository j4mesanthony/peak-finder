import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./routes/index";
import App from "./App.vue";

import PeakFinderLogo from "../src/assets/PeakFinderLogo.vue";

// Menus
import MainNavigation from "./components/menus/MainNavigation.vue";

// Controls
import LargeButton from "./components/controls/LargeButton.vue";

const app = createApp(App);
const pinia = createPinia();

app.component("PeakFinderLogo", PeakFinderLogo);
app.component("LargeButton", LargeButton);
app.component("MainNavigation", MainNavigation);

app.use(router);
app.use(pinia);
app.mount("#app");
