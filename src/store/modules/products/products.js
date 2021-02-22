export default {
  namespaced: true,
  state() {
    return {
      products: [
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
          price: "2000",
        },
        {
          id: "3",
          image: "assets/images/Rectangle 84.jpg",
          title: "Product three",
          description: "Description for product three",
          price: "3200",
        },
        {
          id: "4",
          image: "assets/images/eightImage.jpg",
          title: "Product Four",
          description: "Description for product four",
          price: "3500",
        },
        {
          id: "5",
          image: "assets/images/thnthImage.jpg",
          title: "Product Five",
          description: "Description for product five",
          price: "5000",
        },
        {
          id: "6",
          image: "assets/images/sixthImage.jpg",
          title: "Product Six",
          description: "Description for product six",
          price: "2000",
        },
        {
          id: "7",
          image: "assets/images/fourteenthImage.jpg",
          title: "Product Seven",
          description: "Description for product seven",
          price: "2000",
        },
        {
          id: "8",
          image: "assets/images/twelfthImage.jpg",
          title: "Product Eight",
          description: "Description for product eight",
          price: "2000",
        },
        {
          id: "9",
          image: "assets/images/last.jpg",
          title: "Product Nine",
          description: "Description for product nine",
          price: "2000",
        },
      ],
    };
  },
  mutations: {},
  actions: {},
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
