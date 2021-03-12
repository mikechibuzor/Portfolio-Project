import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/pages/HomePage.vue";
import MyBlog from "./components/pages/MyBlog.vue";
import MyProjects from "./components/pages/MyProjects.vue";
import ContactMe from "./components/pages/ContactMe.vue";
import NotFound from "./components/pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
      alias: "/",
    },
    {
      path: "/blog",
      component: MyBlog,
    },
    {
      path: "/projects",
      component: MyProjects,
    },
    {
      path: "/contact-me",
      component: ContactMe,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

export default router;
