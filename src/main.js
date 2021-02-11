import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Shop from "./components/Shop.vue";
import ContactUs from "./components/ContactUs.vue";
import Blog from "./components/Blog.vue";
import AboutUs from "./components/AboutUs.vue";
import NotFound from "./components/NotFound.vue";

import "tailwindcss/tailwind.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
      alias: "/home",
    },
    {
      path: "/about-us",
      component: AboutUs,
    },
    {
      path: "/shop",
      component: Shop,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/contact-us",
      component: ContactUs,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");

// createApp(App).mount('#app');
