import { createStore } from "vuex";
import projects from "./modules/projects.js";
import blog from "./modules/blog.js";
import theme from "./modules/theme.js";
import carousel from "./modules/carousel.js";

const store = createStore({
  modules: {
    projects,
    blog,
    theme,
    carousel,
  },
});

export default store;
