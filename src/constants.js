// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import studentDashboard from "./assets/tech_logo/student_dashboard.png";
import netflixGpt from "./assets/tech_logo/Nteflix_gpt.png";
import devTinder from "./assets/tech_logo/dev_tinder.png";
import foodOrdering from "./assets/tech_logo/Food_Ordering.png";
import guessTheNumber from "./assets/tech_logo/guessTheNumber.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

// Experience Section Logo's
import SiemensLogo from "./assets/company_logo/siemens_logo.jpeg";
import capgeminiLogo from "./assets/company_logo/capgemini_logo.jpeg";

// Education Section Logo's

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: capgeminiLogo,
    role: "Fullstack Developer",
    company: "Capgemini",
    date: "Sep 2022 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 2,
    img: SiemensLogo,
    role: "Frontend Intern",
    company: "SIEMENS",
    date: "Jan 2021 - May 2021",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI and Simulating the plant of sim card manufacturing industry using tecnomatix software.",
    skills: ["HTML", "CSS", "Javascript", "Bootstrap", "Material UI"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/en/7/75/National_Institute_of_Technology%2C_Kurukshetra_Logo.png",
    school: "NIT kurukshetra",
    date: "Aug 2022 - June 2024",
    grade: "8.46 CGPA",
    desc: "I have completed my B.Tech in Production and Industrial Engineering from NIT Kurukshetra. During my time at college, I gained a strong foundation in programming, software development, and computer science principles by self learning. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at in college has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Technology - B.Tech",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1P6uDTre4wvBqRJXYjPRJW03OX9VI-kZ15g&s",
    school: "Avmd Institute, Agra",
    date: "Apr 2016 - March 2017",
    grade: "79.2%",
    desc: "I completed my class 12 education from Avmd Institute, Agra, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "CBSE(XII) - PCM",
  },
  {
    id: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrK1tOI-sn0QYWPPCR2PLaPQtGRRSNz4KR3w&s",
    school: "Gyan Lok Inter College, Firozabad",
    date: "Apr 2014 - March 2015",
    grade: "84.85%",
    desc: "I completed my class 10 education from Gyan Lok Inter College, Firozabad, under the UP board, where I studied Science with Computer.",
    degree: "CBSE(X) - Science",
  },
];

export const projects = [
  {
    id: 0,
    title: "Food Ordering website Practice",
    description:
      "A dynamic and intuitive React.js application designed to showcase restaurant cards, allowing users to seamlessly browse and add items to their cart with a single click.",
    image: foodOrdering,
    tags: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "API",
      "Redux",
      "Parcel",
    ],
    github: "https://github.com/Cvam1999/React_Practice",
  },
  {
    id: 1,
    title: "Netflix GPT",
    description:
      "A full-stack web application that combines the power of OpenAI's GPT with TMDB's movies APIs which provides personalized movie recommendations and reviews. Users can interact with the AI to get tailored suggestions based on their preferences.",
    image: netflixGpt,
    tags: [
      "React JS",
      "Firebase",
      "OpenAI API",
      "Redux",
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "TMDB API",
    ],
    github: "https://github.com/Cvam1999/Netflix_GPT",
  },
  {
    id: 2,
    title: "Dev Tinder App",
    description:
      "A React-based web application that enables tech professionals to register, connect, and build their network by sending and accepting connection requests from fellow techies..",
    image: devTinder,
    tags: [
      "React JS",
      "API",
      "HTML",
      "Material UI",
      "JavaScript",
      "Redux",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    github: "https://github.com/Cvam1999/devTinder-web",
  },
  {
    id: 3,
    title: "Student Dashboard",
    description:
      "An efficient and customizable web application that enables teachers to manage student data—including name, email, age, and marks—with full CRUD functionality. Built with PostgreSQL as the database and equipped with pagination for streamlined data navigation.",
    image: studentDashboard,
    tags: [
      "React JS",
      "Bootstrap",
      "NPM",
      "Node JS",
      "JavaScript",
      "Express JS",
      "PostgreSQL",
    ],
    github: "https://github.com/Cvam1999/Student_Dashboard_Frontend",
    // webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Guess The Number",
    description:
      "An game application that challenges users to guess a randomly generated number within a limited number of attempts. The game provides feedback on whether the guess is too high or too low, enhancing user engagement and interaction.",
    image: guessTheNumber,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Cvam1999/GuessTheNumber",
  },
  {
    id: 5,
    title: "Library Management System",
    description:
      "An application that allows users to manage a library's book inventory, including adding, updating, and deleting book records. It provides a user-friendly interface for librarians to efficiently handle library operations.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png",
    tags: ["Postman", "Validation", "JAVA", "Spring Boot"],
    github: "https://github.com/Cvam1999/LibraryManagementSystem",
  },
];
