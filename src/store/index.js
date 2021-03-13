import { createStore } from "vuex";
import projects from "./modules/projects.js";
import theme from "./modules/theme.js";

const store = createStore({
  modules: {
    projects,
    theme,
  },
});

export default store;
