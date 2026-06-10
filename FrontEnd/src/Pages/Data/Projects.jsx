import springReact from '../../assets/spring-react.png'
import loginregister from '../../assets/loginregister.png'
import computerRepair from '../../assets/computer-repair.png'
import petcarecenter from '../../assets/petcarecenter.png'
import HomeRenovation from '../../assets/HomeRenovation.png'
import anv from '../../assets/anv.png'
import bmcol from '../../assets/bmcol.jpg'
import flipkartdummy from '../../assets/flipkartdummy.png'
import sayrabhgportfolio from '../../assets/sayrabhgportfolio.png'
import myskillswap from '../../assets/myskillswap.png'
import IAmShop from '../../assets/IAmShop.png'

const Projects = [
    {
        img: myskillswap,
        title: "MySkillSwap",
        subtitle: "Knowledge Sharing..",
        category: "fullstack",
        deployed: true,
        link: "https://my-skill-swap.vercel.app/",
        desc: "A full-stack skill exchange platform built with Spring Boot and React where users can teach, learn, and swap skills. Includes authentication, real-time interaction, and user profile management."
    },
    {
        img: IAmShop,
        title: "IAmShop",
        subtitle: "Grocery Shopping..",
        category: "backend",
        deployed: false,
        link: "https://github.com/Sayrabhg/IAmAShop",
        desc: "Developed a secure backend for a grocery shopping platform using Spring Boot. Implemented REST APIs with JWT authentication, MongoDB integration, and efficient data handling for users and products."
    },
    {
        img: springReact,
        title: "Fetching Records",
        subtitle: "Spring - React",
        category: "backend",
        deployed: true,
        link: "https://records-fetching-table.netlify.app",
        desc: "Fetching data using a Spring Boot API connected to MySQL and displaying the data in React. The @Get API is working."
    },
    {
        img: loginregister,
        title: "Register Form",
        subtitle: "Login Form",
        category: "backend",
        deployed: false,
        link: "https://github.com/Sayrabhg/SaurabhBante-LoginForm-",
        desc: "User authentication system providing secure login and registration functionalities with username, email, and password."
    },
    {
        img: computerRepair,
        title: "Computer Repair",
        subtitle: "Computer Repair",
        category: "wordpress",
        deployed: true,
        link: "https://dev-sayrabhg.pantheonsite.io/",
        desc: "WordPress theme-based website with HTML5, CSS3 & JavaScript where users can find services, projects, and personal details."
    },
    {
        img: petcarecenter,
        title: "Pet Care Center",
        subtitle: "Pet Care Center",
        category: "fullstack",
        deployed: false,
        link: "https://github.com/Sayrabhg/PetCareCenter",
        desc: "PetCare Center built using HTML5, CSS3, JS, PHP, and MySQL (XAMPP). Includes admin and user panels with CRUD operations."
    },
    {
        img: HomeRenovation,
        title: "Home Renovation Pro",
        subtitle: "Home Renovation Pro",
        category: "wordpress",
        deployed: true,
        link: "https://www.webnotickdemo.com/prime-home-renovation/",
        desc: "WordPress theme for home renovation clients. Includes dynamic and responsive front-pages, single pages, and inner pages."
    },
    {
        img: anv,
        title: "Akshar Numerics & Vastu",
        subtitle: "Akshar Numerics & Vastu",
        category: "wordpress",
        deployed: true,
        link: "https://www.nehhamathankar.com/",
        desc: "Designed a well-structured, clear, and client-specific website layout as per requirements."
    },
    {
        img: bmcol,
        title: "BMCOL",
        subtitle: "Hospital",
        category: "wordpress",
        deployed: true,
        link: "https://bmcol.com.au/",
        desc: "First live website project for a client in hospitality management at Brunswick Medical Centre On Lygon."
    },
    {
        img: flipkartdummy,
        title: "Flipkart Clone Design",
        subtitle: "Flipkart Clone Design",
        category: "frontend",
        deployed: false,
        link: "https://github.com/Sayrabhg/FlipkartDemo",
        desc: "A Flipkart website clone project, recreating the exact same structure and layout as the real Flipkart site."
    },
    {
        img: sayrabhgportfolio,
        title: "Responsive Portfolio",
        subtitle: "Sayrabhg Portfolio",
        category: "frontend",
        deployed: true,
        link: "https://sayrabhgportfolio.netlify.app/",
        desc: "The portfolio uses HTML5, CSS3, JavaScript, Bootstrap/Tailwind, Font Awesome, and Netlify for hosting."
    }
];

export default Projects;