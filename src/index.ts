import { createApp } from "vue";

import KMButton from "./button";
import SFCButton from "./SFCButton.vue";

createApp(SFCButton).mount("#app");
createApp(KMButton).mount("#app");