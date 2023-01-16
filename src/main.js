import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "flowbite";

import vueClickOutsideElement from "vue-click-outside-element";

import axios from "axios";

import "./assets/css/style.css";
import "../node_modules/nprogress/nprogress.css";

axios.defaults.baseURL = "https://equran.id/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vueClickOutsideElement);

app.mount("#app");
