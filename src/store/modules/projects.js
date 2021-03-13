export default {
  state() {
    return {
      projects: [
        {
          id: new Date().toISOString(),
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphic
                                designer before moving into web. Then fully into
                                UX Design. My first job was as a PHP web.`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
        },
        {
          id: new Date().toISOString(),
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphic
                                designer before moving into web. Then fully into
                                UX Design. My first job was as a PHP web.`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
        },
        {
          id: new Date().toISOString(),
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphic
                                designer before moving into web. Then fully into
                                UX Design. My first job was as a PHP web.`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
        },
        {
          id: new Date().toISOString(),
          nameOfProject: "Koncise Designs Patterns",
          aboutProject: `I started out as a freelance graphic
                                designer before moving into web. Then fully into
                                UX Design. My first job was as a PHP web.`,
          techStack: [
            {
              nameoftech: "JavaScript",
              imageUrl: "",
            },
          ],
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
