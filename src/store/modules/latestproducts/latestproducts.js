export default {
  namespaced: true,
  state() {
    return {
      latestProducts: [
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "10000.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "5000.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "13500.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "12000.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "9000.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "14800.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "14800.00",
        },
        {
          productImage: "../assets/images/firstImage.jpg",
          productPrice: "14800.00",
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
