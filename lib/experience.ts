export interface Experience {
    title: string;
    company: string;
    companyLogo:string;
    duration: string;
    location: string;
    description: string[];
    techStacks: string[];
  }
  
  export const keywords = [
    "Node.js",
    "Express.js",
    "MongoDB",
    "React.js",
    "JavaScript",
    "backend",
    "frontend",
    "Redux",
    "UI",
    "RESTful APIs",
    "Agile",
  ];

  export const experiences: Experience[] = [
    {
      title: "Web Developer Intern",
      company: "CODEON ",
      companyLogo: "/codeonlogo.png",
      duration: "Dec 2022 -- Feb 2023",
      location: "Remote",
      description: [
        "Developed responsive web applications using React.js for frontend and Node.js/Express.js for backend, improving user experience and application performance",
      "Implemented RESTful APIs and integrated MongoDB database to handle user data, authentication, and application functionalities",
      "Collaborated with senior developers in an Agile environment to deliver features and fix bugs within project deadlines",
      "Built and maintained reusable UI components using React.js and implemented state management using Redux/Context API"
    ],
      techStacks: ["Node.js", "Express.js", "MongoDB", "React.js", "Redux", "JavaScript", "RESTful APIs", "Agile"],
    },
  ];
  