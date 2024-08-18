import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 4 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 Sep - Present",
    role: "Software Developer",
    company: "AppsnDevices Technologies Private Limited",
    description: `Designed multiple dynamic browser compatible pages using HTML5, CSS3, and Javascript. Implemented React Functional Component architecture for newly built web screens and and writing readable and reusable code snippets and maintaining coding standards alongside. Building wireframes as per the requirement. Cross functional team co-ordination for API integration and requirements gathering. Integrating dynamic Charts for clear Data Visualization. Code optimization and Feature addition.`,
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "NodeJs",
      "ExpressJs",
      "ChartJS",
    ],
  },
  {
    year: "2022 Jan- 2022 June",
    role: "Web Developer Intern",
    company: "DCT Academy Banglore",
    description: `An Intensive hands on work with emphasis on  understanding and building Full-stack applications from first principles using MERN stack. Learnt the workflow, associated tools, frameworks and best practices for building Full-stack applications.`,
    technologies: ["JavaScript", "React", "NodeJs", "ExpressJs", "MongoDB"],
  },
  {
    year: "2020 Jan- 2021 April",
    role: "Design and development engineer",
    company: "Astra Metal Systems Pvt. Ltd ",
    description: `Created Inspiring team of 3 individuals and cultivated environment with an open communication culture. Oversee  day to day goals and implementaion of better Product Life Cycle to achieve the same. Effective customer interaction, handled clients like Syntegon Technologies, CommScope Private Limited.`,
    technologies: [
      "Oracle ERP",
      "Solidworks",
      "AutoCadd",
      "Product Life Cycle Management",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Content Management And Distribution Systmem - CMDS",
    image: project1,
    description:
      "Tutor friendly UI to upload  content and other associated learning materials for a student of perticular borad (ie. CBSE, Assam Board) where student can access it in remote set-up. ",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "ExpressJS"],
  },
  {
    title: "Read Analytics [ Student Performence Tracker ]",
    image: project4,
    description:
      "A web application to monitor the student performance and generate the reports accordingly by taking student response for assignments and regular assessments.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "JWTokens",
      "ExpressJS",
      "PostgreSql",
    ],
  },
  {
    title: "Billing - App(A front end UI to generate bills conveniently)",
    image: project2,
    description:
      "Biling app is an user-friendly Customer Relationship Management App where you can maintain your own customers and assosiated products list and have accessibility to generate Bills with respect to each customer.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Redux",
      "JWTokens",
      "Authentication",
      "Axios",
    ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
];

export const CONTACT = {
  address: "#1, Chandra Layout, Opp. to Apollo Pharmacy, Vijayanagar, Banglore",
  phoneNo: "+91 9741742797",
  email: "vinayramesh1997@gmail.com",
};
