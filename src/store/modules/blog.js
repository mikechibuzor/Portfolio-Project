export default {
  state() {
    return {
      blog: [
        {
          id: new Date().toISOString(),
          title: "Revisiting the abbrelement",
          date: "February, 2019",
          languages: ["JavaScript", "Vue", "TailwindCSS"],
          content:
            "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql",
        },
        {
          id: new Date().toISOString(),
          title: "What is tree shaking and how does it work?",
          date: "January, 2019",
          languages: ["HTML"],
          content:
            "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql",
        },
        {
          id: new Date().toISOString(),
          title: "Revisiting the abbrelement",
          date: "February, 2019",
          languages: ["JavaScript"],
          content:
            "I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql",
        },
      ],
    };
  },
  getters: {
    getBlog(state) {
      return state.blog;
    },
  },
  mutations: {},
  actions: {},
};
