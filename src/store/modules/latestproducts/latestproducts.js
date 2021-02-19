export default {
  namespaced: true,
  state() {
    return {
      latestProducts: [
        {
          id: "1",
          image: "",
          title: "Product One",
          description: "Description for product one",
          price: "2000",
        },
        {
          id: "1",
          image: "",
          title: "Product One",
          description: "Description for product one",
          price: "2000",
        },
        {
          id: "6",
          image: "",
          title: "Product Six",
          description: "Description for product six",
          price: "3200",
        },
        {
          id: "2",
          image: "",
          title: "Product Two",
          description: "Description for product two",
          price: "3500",
        },
        {
          id: "3",
          image: "",
          title: "Product Three",
          description: "Description for product three",
          price: "5000",
        },
        {
          id: "3",
          image: "",
          title: "Product Three",
          description: "Description for product three",
          price: "5000",
        },
        {
          id: "3",
          image: "",
          title: "Product Three",
          description: "Description for product three",
          price: "5000",
        },
        {
          id: "3",
          image: "",
          title: "Product Three",
          description: "Description for product three",
          price: "5000",
        },
      ],
    };
  },
  actions: {},
  mutations: {},
  getters: {
    getLatestProducts(state) {
      return state.latestProducts;
    },
  },
};
