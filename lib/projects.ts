export interface Project {
    title: string;
    description: string;
    link: string;
    techStacks: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "PostHive",
      description:
         "Developed a full-stack blog platform with React Js and TypeScript, enabling seamless post creation, likes, follows, and user authentication with JWT, powered by PostgreSQL and Prisma ORM for efficient data management.",    
      link: "https://github.com/ShivaTejMatam/PostHive",
      techStacks: [ "React Js","Tailwind Css","TypeScript","Prisma ORM","PostgreSQL","Node Js","Express Js","JWT"]
    },
    {
      title: "Real-time Chat application",
      description:
      "Real-time chat application with Socket.io featuring room-based messaging, user presence indicators, and instant message delivery. Supports multiple chat rooms and persistent chat history.",
      link: "https://github.com/ShivaTejMatam/Chat-Application",
      techStacks: ["React Js","Tailwind Css","Node Js","Socket.io","Express Js","JavaScript","HTML","CSS"]
    },
    {
      title:"Event Hosting ",
      description:"This project is an event-hosting application designed to manage and organize events efficiently. It features user authentication, event creation, and management.",
      link:"https://github.com/ShivaTejMatam/Event-Hosting",
      techStacks:["Node.js","Next Js","React Js","Tailwind Css","TypeScript","JavaScript","Prisma ORM","PostgreSQL","Next Auth","Next API Routes","jsonwebtoken"]
    }
  ];
  