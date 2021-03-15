export default {
  state() {
    return {
      projects: [
        {
          id: "1",
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
          githubLink: "github.com/mikechibuzor",
        },
        {
          id: "2",
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
          githubLink: "github.com/mikechibuzor",
        },
        {
          id: "3",
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
          githubLink: "github.com/mikechibuzor",
        },
        {
          id: "4",
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
          githubLink: "github.com/mikechibuzor",
        },
      ],
    };
  },
  mutations: {},
  getters: {
    getProjects(state) {
      return state.projects;
    },
  },
  actions: {},
};
