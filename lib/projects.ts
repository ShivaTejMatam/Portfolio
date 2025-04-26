export interface Project {
    title: string;
    description: string;
    link: string;
    techStacks: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "Social Media App",
      description:
      "Developed a Social Media Platform using Nextjs and TypeScript, enabling user authentication with clerk and and realtime data fetching with Prisma ORM and PostgreSQL, allowing users to create posts, like, comment, and follow others and can upload images.",
      link: "https://social-mediahub.vercel.app/",
      techStacks: ["Next Js","Tailwind Css","TypeScript","Prisma ORM","PostgreSQL","Clerk","Next Auth","Node Js","Uploadthing"]
    },
    {
      title: "PostHive",
      description:
         "Developed a full-stack blog platform with React Js and TypeScript, enabling seamless post creation, likes, follows, and user authentication with JWT, powered by PostgreSQL and Prisma ORM for efficient data management.",    
      link: "https://github.com/ShivaTejMatam/PostHive",
      techStacks: [ "React Js","Tailwind Css","TypeScript","Prisma ORM","PostgreSQL","Node Js","Express Js","JWT"]
    },
    {
      title:"Event Hosting ",
      description:"This project is an event-hosting application designed to manage and organize events efficiently. It features user authentication, event creation, and management.",
      link:"https://github.com/ShivaTejMatam/Event-Hosting",
      techStacks:["Node.js","Next Js","React Js","Tailwind Css","TypeScript","JavaScript","Prisma ORM","PostgreSQL","Next Auth","Next API Routes","jsonwebtoken"]
    }
  ];
  