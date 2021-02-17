import { createStore } from "vuex";
import productsModules from "./modules/products/products.js";
import categoriesModules from "./modules/categories/categories.js";
import latestProductsModules from "./modules/latestproducts/latestproducts.js";

const store = createStore({
  modules: {
    products: productsModules,
    categories: categoriesModules,
    latestProducts: latestProductsModules,
  },
});

export default store;
