import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiGooglechat } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export const EXPERIENCES = [
  {
    key: "MKA, Canada",
    company: "MKA, Canada",
    role: "Frontend Developer",
    period: "Sep 2022 – Dec 2023 ",
    specifications: [
      "Collaborated in an agile development environment, consisting of both front-end and backend to developed and deployed dynamic features and functions for most of the organisation’s in-house software solutions, enhancing the overall user experience in alignment with the organisation’s requirements ",
      "Delivered the full-stack implementation of two (2) PWAs – A School management system with major focus on daily attendance and reporting solution. And a Multilingual publications web application with role based editing capabilities. ",
      "Maintained and refactored existing React components to fit best practices, for maximized reusability or improved performance.",
      "As an agile oriented company, for project management and version control on various projects, the company employed Azure DevOps Server and Git. I effectively completed and delivered each assigned ticket, meeting the specified deadlines.",
      "Executed all necessary API integrations and business logics in accordance with  projects’ vision and needs using mostly REST interfaces and implementations.",
    ],
  },
  {
    key: "Hetikal Studios",
    company: "Hetikal Studios",
    role: "React Web Developer",
    period: "May 2022 – Aug 2022 ",
    specifications: [
      " Developed and delivered the front-end implementation of all User Interfaces and features for the Ridima Web Application as provided by the design team.",
      "Collaborated in an agile, multidisciplinary development team to ensure that all features meet users needs and meets business requirements.",
      "Managed the transition of applications from older, legacy systems to new platforms, ensuring compatibility and efficiency for the best possible outcomes.",
      "Maintained React systems, addressing and rectifying any identified bug",
    ],
  },
  {
    key: "Codevillage LLC",
    company: "Codevillage LLC",
    role: "Frontend Developer",
    period: "Nov 2020 – April 2022 ",
    specifications: [
      "Collaborated to deliver several solutions that span across multiple sectors including legal, finance, education and management",
      "Collaborated with 2 cross-functional teams; product design and frontend engineering; to deliver visually appealing, assessible and responsive interfaces of features for several application requirements.",
      "Collaborated with the backend team to implement all API integrations using REST or Graphql as may be required by business need",
      "Led the delivery of the full-stack implementation of cv-onine - the online version of the company's training hub. It allows users to choose a path and provides all reasources and human guides to successful achievement of such path.",
      "Supervised and Mentored interns during their assigned projects and tasks, offering necessary assistance in accordance with company guidelines and policies.",
      "Facilitated a seamless onboarding/adaptation process for new team members, helping them grasp the codebase structure effortlessly.",
    ],
  },
];

export const SOCIAL_MEDIA_URLS = [
  {
    link: "https://www.linkedin.com/in/desmond-bernard-46b6341bb/",
    icon: FaLinkedin,
  },
  {
    link: "https://github.com/Ifcodes",
    icon: BsGithub,
  },
  {
    link: "https://www.fiverr.com/desmondbernard",
    icon: TbBrandFiverr,
  },
  {
    link: "mailto:bernarddesmond16@gmail.com",
    icon: SiGooglechat,
  },
];

export const PROJECTS = [
  {
    title: "TikyTask",
    description:
      "This mini task management app features a user-friendly UI/UX for viewing, editing, and adding tasks. Though incomplete, it currently showcases key elements like a clean interface, pagination for list management, and task modifications, highlighting UI and performance optimization.",
    technologies: ["React", "Typescript", "TailwindCss"],
    additionalInfo: "",
    projectUrl: "https://tikytask.netlify.app/",
    githubUrl: "https://github.com/Ifcodes/schoollinka-todo-app",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
  {
    title: "Absence Application",
    description:
      "This mini feature displays a list of employee absence/leave applications, showing the status and any conflicts. Users can view individual absences by clicking on names. It includes filter and sorting functionality, with unit tests achieving up to 95% coverage.",
    technologies: ["React", "Typescript", "TailwindCss", "Vitest", "MSW"],
    additionalInfo: "",
    projectUrl: "https://absence-app.netlify.app/",
    githubUrl: "https://github.com/Ifcodes/absence-list-test",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
  {
    title: "LendSqr Clone",
    description:
      "This is a cloned version of the lendsqr.com dashboard page for organizations, highlighting the clean UI of the Users tab. It displays a table of registered users/customers and allows viewing individual user details via an option button.",
    technologies: ["Next.js", "Typescript", "TailwindCss"],
    additionalInfo: "",
    projectUrl: "https://lend-sqr.vercel.app/users",
    githubUrl: "https://github.com/Ifcodes/LendSqr",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
  {
    title: "Quizpie",
    description:
      "This is a quiz appliation built for fun. Users can take quized and get final result instantly after the last question. Questions and random IT questions.",
    technologies: ["React", "CSS"],
    additionalInfo: "",
    projectUrl: "https://quizpie.netlify.app/",
    githubUrl: "https://github.com/Ifcodes/Quiz-App",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
  {
    title: "Todo App",
    description:
      "This is a simple todo appliation. Users can mark done tasks, filtered tasks options and remove them.",
    technologies: ["React", "Typescript", "Styled-component"],
    additionalInfo: "",
    projectUrl: "https://desmondtodo.netlify.app/",
    githubUrl: "https://github.com/Ifcodes/Todo-App",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
  {
    title: "WalletCloud Clone",
    description:
      "This is a remixed clone of the walletcloud.app website, highlighting the landing page and pricing page.",
    technologies: ["React", "Styled-Component", "Vite"],
    additionalInfo: "",
    projectUrl: "https://cosmic-cannoli-cd6df8.netlify.app/",
    githubUrl: "https://github.com/Ifcodes/wallet-cloud",
    isMajor: false,
    canVisit: true,
    media: [
      {
        type: "image",
        url: "",
      },
    ],
  },
];
