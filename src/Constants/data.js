import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const NAV_LINKS = [
  {
    label: 'Home',
    url: '#',
    id: 1
  },
  {
    label: 'About',
    url: '#about',
    id: 3
  },
  {
    label: 'Projects',
    url: '#projects',
    id: 2
  },
  
]

const SOCIAL_LINKS = [
  {
    name: 'Github',
    icon: faGithub,
    url: 'https://www.github.com/ashisvi/',
    id: 1
  },
  {
    name: 'LinkedIn',
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/ashisvi',
    id: 2
  },
  {
    name: 'Instagram',
    icon: faInstagram,
    url: 'https://www.instagram.com/',
    id: 3
  },
]

const PROJECT_LIST = [
  
  {
    id: 2,
    label: "ToDo App",
    description: "A ToDo application made using React and Bootstrap allow user to add and delete task. Local storage has been used to store data in this application. It keeps complete and incomplete tasks separate.",
    image: "images/todo-app.png",
    demo: 'https://reactjsnotesapp.netlify.app/',
    code: 'https://reactjsnotesapp.netlify.app/',
    technologies: ['React', 'JavaScript', 'Sass', 'Bootstrap']
  },
  {
    id: 3,
    label: "Notes App",
    description: "A simple note application made using ReactJS and JavaScript. This application allow user to create, delete and edit notes. This application also support Markdown formating.",
    image: "images/note-app.png",
    demo: 'https://reactjsnotesapp.netlify.app/',
    code: 'https://reactjsnotesapp.netlify.app/',
    technologies: ['React', 'JavaScript', 'Sass']
  },
]

export {NAV_LINKS, SOCIAL_LINKS, PROJECT_LIST}
