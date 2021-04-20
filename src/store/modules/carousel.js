export default {
  state() {
    return {
      slides: [
        {
          id: 1,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
        {
          id: 2,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale 1",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
        {
          id: 3,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale 2",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
        {
          id: 4,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale 3",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
        {
          id: 5,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale 4",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
        {
          id: 6,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale 5",
            secondHeader: "Software and DevOps Engineer",
            description:
              "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
          },
        },
      ],
    };
  },
  getters: {
    getCarousel(state) {
      return state.slides;
    },
  },
};
