import { createApp } from "vue";
import App from "./App.vue";

import PeakFinderLogo from "../src/assets/PeakFinderLogo.vue";

// Controls
import LargeButton from "./components/controls/LargeButton.vue";

const app = createApp(App);

app.component("PeakFinderLogo", PeakFinderLogo);
app.component("LargeButton", LargeButton);

app.mount("#app");