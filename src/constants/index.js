import project1 from "../assets/projects/project-c3.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React as well as back-end technologies like Node.js, Express, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Recently graduate full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - march - july",
    role: "Full Stack Intern",
    company: "Corevo PVT LTD.",
    description: `Gained hands-on experience in full-stack web development by working on various front-end and back-end projects.
      Utilized modern technologies, including React, Redux Toolkit, and Zustand for efficient state management,
      Developed robust back-end systems using Express.js and tested APIs with Postman to ensure seamless integrations,
      Participated in code reviews, adhering to industry best practices to maintain high code quality and optimize performance.
`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "ChatBlitz",
    image: project1,
    description:
      "Architected and developed, a real-time chat application using features like Socket.io, JWT authentication, Zustand state management, and MongoDB .",
    technologies: ["React", "Zustand", "Node.js", "MongoDB"],
  },
  {
    title: "InfoAtlas",
    image: project2,
    description:
      "Developed a React 19-based web app for country information retrieval, utilizing React Router DOM and Axios API data fetching. Integrated search, filter, and sort functionalities with an intuitive UI to display detailed country descriptions efficiently.",
    technologies: ["react","HTML", "CSS", "Axios"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects and skills with a responsive, visually appealing UI. Optimized performance, accessibility, and smooth animations for an engaging user experience across all devices.",
    technologies: ["React", "TailwindCSS", "Framer Motion"]
  },
  {
    title: "Online food ordering UI ",
    image: project4,
    description:
      "Designed and developed a responsive online food ordering UI using HTML, CSS, and JavaScript, delivering a visually appealing and user-friendly interface..",
    technologies: ["HTML", "CSS", "Javascript"]
  },
];

export const CONTACT = {
  address: "Nagpur, Maharashtra - 440017",
  phoneNo: "+91-9518591182 ",
  email: "spandhankotangle7@gmail.com",
};
