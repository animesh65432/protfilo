import chatapplication from "@/public/Screenshot (205).png";
import Emailbox from "@/public/Screenshot (206).png";
import ExpesnTracker from "@/public/Screenshot (207).png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Expense Tracker",
    description: "Create Expense Tracker where Users can track theirs expenses",
    tags: [
      "REACT",
      "REACT-TOOLKIT",
      "JAVASCRIPT",
      "NODE.JS",
      "EXPRESS.JS",
      "NOSQL",
      "MONGOOSE",
    ],
    imageUrl: ExpesnTracker,
    githublink: "https://github.com/animesh65432/EXPENSE-TRACKER-FullStack",
  },
  {
    title: "CHAT WEBSITE",
    description:
      "it's chat application where user can chat and share images and create group and add new person",
    tags: [
      "TYPESCRIPT",
      "NODE.JS",
      "EXPRESS.JS",
      "MYSQL",
      "SEQUELIZE",
      "REACT",
      "REACT-TOOLKIT",
    ],
    imageUrl: chatapplication,
    githublink: "https://github.com/animesh65432/CHAT-WEBISTE",
  },
  {
    title: "MAIL BOX",
    description:
      "it's email box and where user can sent to messages to others and other people's can see their messages",
    tags: [
      "REACT",
      "REACT TOOLKIT",
      "NO-SQL",
      "MONGOOSE",
      "NODE-JS",
      "EXPRESS-JS",
    ],
    imageUrl: Emailbox,
    githublink: "https://github.com/animesh65432/Mail-Box",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
