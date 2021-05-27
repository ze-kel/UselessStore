import "core-js/stable"; // only stable feature also is possible with only `core-js`
import "regenerator-runtime/runtime"; // To ensure that regeneratorRuntime is defined globally

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import { store } from "./store";

createApp(App).use(router).use(store).mount("#app");
