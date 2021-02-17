import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/pages/Home.vue";
import Shop from "./components/pages/Shop.vue";
import ContactUs from "./components/pages/ContactUs.vue";
import Blog from "./components/pages/Blog.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import NotFound from "./components/pages/NotFound.vue";

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

export default router;
