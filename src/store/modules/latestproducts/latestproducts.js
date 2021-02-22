export default {
  namespaced: true,
  state() {
    return {
      latestProducts: [
        {
          id: "1",
          image: "assets/images/seventhImage.jpg",
          title: "Product One",
          description: "Description for product one",
          price: "2000",
        },
        {
          id: "2",
          image: "assets/images/eightImage.jpg",
          title: "Product Two",
          description: "Description for product two",
          price: "3000",
        },
        {
          id: "3",
          image: "assets/images/ninthImage.jpg",
          title: "Product Three",
          description: "Description for product Three",
          price: "3200",
        },
        {
          id: "4",
          image: "assets/images/tenthImage.jpg",
          title: "Product Four",
          description: "Description for product four",
          price: "3500",
        },
        {
          id: "5",
          image: "assets/images/eleventhImage.jpg",
          title: "Product Five",
          description: "Description for product five",
          price: "5000",
        },
        {
          id: "6",
          image: "assets/images/twelfthImage.jpg",
          title: "Product Twelve",
          description: "Description for product twelve",
          price: "6800",
        },
        {
          id: "7",
          image: "assets/images/thnthImage.jpg",
          title: "Product Seven",
          description: "Description for product seven",
          price: "2350",
        },
        {
          id: "8",
          image: "assets/images/fourteenthImage.jpg",
          title: "Product Eight",
          description: "Description for product eight",
          price: "10000",
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
