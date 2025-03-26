import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithub,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";

export const skillsCommand = [
  {
    title: "Html 5",
    Icon: SiHtml5,
    level: 80,
  },
  {
    title: "Css 3",
    Icon: SiCss3,
    level: 90,
  },
  {
    title: "Tailwind",
    Icon: SiTailwindcss,
    level: 85,
  },
  {
    title: "JavaScript",
    Icon: SiJavascript,
    level: 85,
  },
  {
    title: "React",
    Icon: SiReact,
    level: 85,
  },
  {
    title: "MongoDB",
    Icon: SiMongodb,
    level: 70,
  },
  {
    title: "MySql",
    Icon: SiMysql,
    level: 75,
  },
  {
    title: "Java",
    Icon: FaJava,
    level: 65,
  },
  {
    title: "Nodejs",
    Icon: SiNodedotjs,
    level: 80,
  },
  {
    title: "Github",
    Icon: SiGithub,
    level: 85,
  },
];

export const projectsCommand = [
  {
    title: "Blog Application",
    tech: [SiReact, SiTailwindcss, GiBearFace],
    link: "https://github.com/Subodh-Hub/Blog-Application-Intern-Digihub-",
    cover: "/blog.png",
    background: "bg-[#678D58]",
  },
  {
    title: "Sneaker Store",
    tech: [SiHtml5, SiCss3],
    link: "https://github.com/Subodh-Hub/Sneakers",
    cover: "/sneaker.png",
    background: "bg-[#7E588D]",
  },
];
