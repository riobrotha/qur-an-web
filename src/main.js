import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "flowbite";

import axios from "axios";

import "./assets/css/style.css";

axios.defaults.baseURL = "https://equran.id/api";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
