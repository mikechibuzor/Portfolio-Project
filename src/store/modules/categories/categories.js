export default {
  namespaced: true,
  state() {
    return {
      categories: [
        {
          name: "Category 1",
          categoryImage: "../assets/images/firstImage.jpg",
        },
        {
          name: "Category 2",
          categoryImage: "../assets/logo.jpg",
        },
        {
          name: "Category 3",
          categoryImage: "../assets/logo.jpg",
        },
        {
          name: "Category 4",
          categoryImage: "../assets/logo.jpg",
        },
        {
          name: "Category 5",
          categoryImage: "../assets/logo.jpg",
        },
        {
          name: "Category 6",
          categoryImage: "../assets/logo.jpg",
        },
      ],
    };
  },
  actions: {},
  mutations: {},
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
};
