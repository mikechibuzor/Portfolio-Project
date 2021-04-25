export default {
  state() {
    return {
      projects: [
        {
          id: "1",
          nameOfProject: "Afroganiks",
          aboutProject: `AfrOganiks Nutrition is a leading manufacturer of quality natural wellness products geared towards helping millions of Africans achieve total wellness using 100% natural formulas since 2011.`,
          techStack: [
            {
              nameoftech: "PHP",
              imageUrl: "",
            },
            {
              nameoftech:"Laravel"
            }
          ],
          githubLink: "https://afroganiks.com",
          
        },
        {
          id: "2",
          nameOfProject: "11elevenConsults",
          aboutProject: `A team is  of professionals with proven expertise in all the key areas of Human Resource and Digital Marketing Management.`,
          techStack: [
            {
              nameoftech: "WordPress",
              imageUrl: "",
            },
          ],
          githubLink: "https://11elevenconsults.com",
        },
        {
          id: "3",
          nameOfProject: "Smooches",
          aboutProject: `Smooches is an online underwear unisex store that stocks on a variety of female lingerie and men underwear, sleepwear, loungewear, swimwear , sex toys and scents at best prices. The goal at SMOOCHES is to style everyone with the underwear that best flatters them.`,
          techStack: [
            {
              nameoftech: "WordPress",
              imageUrl: "",
            },
          ],
          githubLink: "https://smoochiz.com",
        },
        // {
        //   id: "4",
        //   nameOfProject: "Koncise Designs Patterns 4",
        //   aboutProject: `I started out as a freelance graphics designer before moving into web then fully into UX design. My first was as a PHP web developer. My primary responsiblity was to design and code web apps. Basically converting the user interface designs into HTML/CSS and some Jquery and also work on php/mysql`,
        //   techStack: [
        //     {
        //       nameoftech: "React",
        //       imageUrl: "",
        //     },
        //   ],
        //   githubLink: "github.com/mikechibuzor",
        // },
      ],
    };
  },
  mutations: {},
  getters: {
    getProjects(state) {
      return state.projects;
    },
    getNumberOfProjects(state) {
      return state.projects.length;
    },
  },
  actions: {},
};
