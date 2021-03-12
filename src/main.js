import { createApp } from "vue";
import App from "./components/App.vue";
import router from "./router.js";
import store from "./store/index.js";

import "tailwindcss/tailwind.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

// createApp(App).mount('#app');
