// main
import App from "./App.vue";
import { createApp } from "vue";
import { loadFonts } from "./plugins/webfontloader";
// vuetify
import "vuetify/styles"; // Global CSS has to be imported
import vuetify from "./plugins/vuetify";
// vue 三件套
import router from "@/src/route/index.js";
import { createPinia } from "pinia";

loadFonts();
createApp(App).use(createPinia()).use(router).use(vuetify).mount("#app");
