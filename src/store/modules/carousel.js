export default {
  state() {
    return {
      slides: [
        {
          id: 1,
          imageUrl: "assets/images/olumide.jpg",
          text: {
            firstHeader: "Hello, I'm Olumide Okewale",
            secondHeader: "FullStack Software Engineer",
            description:
              "I am Olumide Okewale, a Software Engineer by profession. My career started out in 2017 just after the completion of training at HIIT. Since then I have worked in a number of companies handling different projects.I worked at CredPal for a little over year.After my time at CredPal, I joined Energy360 Africa in 2020 as a fullStack engineer and i improved on many of my skill set. It is important I mention some of the cool things we do at Energy360 Africa and how it has impacted my knowledge. Energy360 Africa is an indigenous tech solutions company that uses the latest software technology to solve issues in the Nigeria downstream industry. As pioneers of this type of technology in Nigeria, there is a high level of knowledge sharing session and product journeying that goes into each product.",
          },
        },
        // {
        //   id: 2,
        //   imageUrl: "assets/images/olumide.jpg",
        //   text: {
        //     firstHeader: "Hello, I'm Olumide Okewale 1",
        //     secondHeader: "Software and DevOps Engineer",
        //     description:
        //       "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
        //   },
        // },
        // {
        //   id: 3,
        //   imageUrl: "assets/images/olumide.jpg",
        //   text: {
        //     firstHeader: "Hello, I'm Olumide Okewale 2",
        //     secondHeader: "Software and DevOps Engineer",
        //     description:
        //       "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
        //   },
        // },
        // {
        //   id: 4,
        //   imageUrl: "assets/images/olumide.jpg",
        //   text: {
        //     firstHeader: "Hello, I'm Olumide Okewale 3",
        //     secondHeader: "Software and DevOps Engineer",
        //     description:
        //       "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
        //   },
        // },
        // {
        //   id: 5,
        //   imageUrl: "assets/images/olumide.jpg",
        //   text: {
        //     firstHeader: "Hello, I'm Olumide Okewale 4",
        //     secondHeader: "Software and DevOps Engineer",
        //     description:
        //       "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
        //   },
        // },
        // {
        //   id: 6,
        //   imageUrl: "assets/images/olumide.jpg",
        //   text: {
        //     firstHeader: "Hello, I'm Olumide Okewale 5",
        //     secondHeader: "Software and DevOps Engineer",
        //     description:
        //       "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web pages.",
        //   },
        // },
      ],
    };
  },
  getters: {
    getCarousel(state) {
      return state.slides;
    },
  },
};
