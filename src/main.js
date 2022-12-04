import { createApp } from "vue";
import router from "./routes/index";
import App from "./App.vue";

import PeakFinderLogo from "../src/assets/PeakFinderLogo.vue";

// Menus
import SlideMenu from "./components/menus/SlideMenu.vue";

// Controls
import LargeButton from "./components/controls/LargeButton.vue";

const app = createApp(App);

app.component("PeakFinderLogo", PeakFinderLogo);
app.component("LargeButton", LargeButton);
app.component("SlideMenu", SlideMenu);

app.use(router);
app.mount("#app");
