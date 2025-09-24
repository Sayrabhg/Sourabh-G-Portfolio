import '../styles/Projects.css'
import springReact from '../assets/spring-react.png'
import loginregister from '../assets/loginregister.png'
import computerRepair from '../assets/computer-repair.png'
import petcarecenter from '../assets/petcarecenter.png'
import HomeRenovation from '../assets/HomeRenovation.png'
import anv from '../assets/anv.png'
import bmcol from '../assets/bmcol.jpg'
import flipkartdummy from '../assets/flipkartdummy.png'
import sayrabhgportfolio from '../assets/sayrabhgportfolio.png'
import ReadMore from './SubPages/ReadMore'

export default function Projects() {
    const projects = [
        {
            img: springReact,
            title: "Fetching Records",
            subtitle: "Spring - React",
            link: "https://github.com/Sayrabhg/Records-Fetching-Table",
            desc: "Fetching data using a Spring Boot API connected to MySQL and displaying the data in React. The @Get API is working."
        },
        {
            img: loginregister,
            title: "Register Form",
            subtitle: "Login Form",
            link: "https://github.com/Sayrabhg/SaurabhBante-LoginForm-",
            desc: "User authentication system providing secure login and registration functionalities with username, email, and password."
        },
        {
            img: computerRepair,
            title: "Computer Repair",
            subtitle: "Computer Repair",
            link: "https://dev-sayrabhg.pantheonsite.io/",
            desc: "WordPress theme-based website with HTML5, CSS3 & JavaScript where users can find services, projects, and personal details."
        },
        {
            img: petcarecenter,
            title: "Pet Care Center",
            subtitle: "Pet Care Center",
            link: "https://github.com/Sayrabhg/PetCareCenter",
            desc: "PetCare Center built using HTML5, CSS3, JS, PHP, and MySQL (XAMPP). Includes admin and user panels with CRUD operations."
        },
        {
            img: HomeRenovation,
            title: "Home Renovation Pro",
            subtitle: "Home Renovation Pro",
            link: "https://www.webnotickdemo.com/prime-home-renovation/",
            desc: "WordPress theme for home renovation clients. Includes dynamic and responsive front-pages, single pages, and inner pages."
        },
        {
            img: anv,
            title: "Akshar Numerics & Vastu",
            subtitle: "Akshar Numerics & Vastu",
            link: "https://www.nehhamathankar.com/",
            desc: "Designed a well-structured, clear, and client-specific website layout as per requirements."
        },
        {
            img: bmcol,
            title: "BMCOL",
            subtitle: "Hospital",
            link: "https://bmcol.com.au/",
            desc: "First live website project for a client in hospitality management at Brunswick Medical Centre On Lygon."
        },
        {
            img: flipkartdummy,
            title: "Flipkart Clone Design",
            subtitle: "Flipkart Clone Design",
            link: "https://github.com/Sayrabhg/FlipkartDemo",
            desc: "A Flipkart website clone project, recreating the exact same structure and layout as the real Flipkart site."
        },
        {
            img: sayrabhgportfolio,
            title: "Responsive Portfolio",
            subtitle: "Sayrabhg Portfolio",
            link: "https://sayrabhgportfolio.netlify.app/",
            desc: "The portfolio uses HTML5, CSS3, JavaScript, Bootstrap/Tailwind, Font Awesome, and Netlify for hosting."
        }
    ];
    return (
        <>
            <section id="main-projects">
                <div class="container py-5">
                    <aside class="aside33">
                        <h1 class="py-2">Projects</h1>
                        <div class="">
                            <div id="projects" className="d-grid p-4" style={{ gap: '3em 2em' }}>
                                {projects.map((proj, idx) => (
                                    <div id="projects" key={idx} class="educationanimation rounded border visible">
                                        <div class="alleductionanimation p-3">
                                            <div class="border border-dark rounded" style={{ height: '13.8em', overflow: 'hidden' }}><img src={proj.img} alt={proj.title} /></div>
                                            <div class="d-grid p-3" style={{ gridTemplateColumns: '1fr auto', alignContent: 'center', justifyContent: 'space-between' }}>
                                                <div class="animated-text">
                                                    <h2 class="">{proj.title}</h2>
                                                    <h2 class="position-absolute">{proj.subtitle}</h2>
                                                </div>
                                                <div>
                                                    <a href={proj.link} className="icons" target="_blank" rel="noopener noreferrer">
                                                        <ReadMore />
                                                    </a>
                                                </div>
                                            </div>
                                            <p class="px-3 pb-4">{proj.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}