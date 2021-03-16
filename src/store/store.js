import { createStore } from "vuex";
import projects from "./modules/projects.js";
import blog from './modules/blog.js';
import theme from "./modules/theme.js";

const store = createStore({
  modules: {
    projects,
    blog,
    theme,
  },
});

export default store;
