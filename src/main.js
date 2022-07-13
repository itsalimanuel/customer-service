import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import store from "./store";
import "@fontsource/tajawal";

createApp(App).use(store).use(ElementPlus).use(router).mount("#app");
