export default {
  namespaced: true,
  state() {
    return {
      categories: [
        {
          name: "Category 1",
          categoryImage: "assets/images/firstImage.jpg",
        },
        {
          name: "Category 2",
          categoryImage: "assets/images/secondImage.png",
        },
        {
          name: "Category 3",
          categoryImage: "assets/images/thirdImage.png",
        },
        {
          name: "Category 4",
          categoryImage: "assets/images/fourthImage.jpg",
        },
        {
          name: "Category 5",
          categoryImage: "assets/images/fifthImage.jpg",
        },
        {
          name: "Category 6",
          categoryImage: "assets/images/sixthImage.jpg",
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
