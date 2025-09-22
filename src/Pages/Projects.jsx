import '../styles/Projects.css'
import springReact from '../imges/spring-react.png'
import loginregister from '../imges/loginregister.png'
import computerRepair from '../imges/computer-repair.png'
import petcarecenter from '../imges/petcarecenter.png'
import HomeRenovation from '../imges/HomeRenovation.png'
import anv from '../imges/anv.png'
import bmcol from '../imges/bmcol.jpg'
import flipkartdummy from '../imges/flipkartdummy.png'
import ReadMore from './SubPages/ReadMore'

export default function Projects() {
    return (
        <>
            <section id="main-projects">
                <div class="container py-5">
                    <aside class="aside33">
                        <h1 class="">Projects</h1>
                        <div class="">
                            <div id="projects" className="d-grid" style={{gap:'3em 2em'}}>
                                <div id="projects"
                                    class="educationanimation round roundeded border">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img src={springReact} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Fecthing Records</h2>
                                                <h2 class="position-absolute">Spring - React</h2>
                                            </div>
                                            <a href="#notUploadedAnywhere"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">The requirements include
                                            fetching data using a Spring Boot API connected to a MySQL database, and displaying
                                            the fetched MySQL data on a React web page using the Spring API. In this project @get api is working.</p>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img
                                            src={loginregister} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Register Form</h2>
                                                <h2 class="position-absolute">Login Form</h2>
                                            </div>
                                            <a href="https://github.com/Sayrabhg/SaurabhBante-LoginForm-"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">This project is a user
                                            authentication system that provides secure login and registration functionalities
                                            for an application. It allows users to create accounts by registering with their
                                            credentials (such as username, email, and password), and then securely log in to
                                            access protected features or areas of the application.</p>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img
                                            src={computerRepair} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Computer Repair</h2>
                                                <h2 class="position-absolute">Computer Repair</h2>
                                            </div>
                                            <a href="https://dev-sayrabhg.pantheonsite.io/"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">This website i made
                                            up on a wordpress theme, which i developed on using the language of html5, css3 &
                                            javascript, In that website user can able find their services and owners projects
                                            details or owners personal details.</p>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img
                                            src={petcarecenter} alt="" />
                                        </div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Pet Care Center</h2>
                                                <h2 class="position-absolute">Pet Care Center</h2>
                                            </div>
                                            <a href="https://github.com/Sayrabhg/PetCareCenter"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">In this PetCare
                                            Center website, i have develope a all the pages using html5, Css3, js, php as
                                            scripting language, Using the sql local xampp database, i have create in this admin
                                            module panel & user module panel. It Performs CRUD operation.</p>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img
                                            src={HomeRenovation} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Home Renovation Pro</h2>
                                                <h2 class="position-absolute">Home Renovation Pro</h2>
                                            </div>
                                            <a href="https://www.webnotickdemo.com/prime-home-renovation/"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">This theme is made
                                            been in a wordpress, In this website many dynamic and responsive front-pages, single
                                            pages, inner
                                            pages which i had been creating in the recently. The theme is purely creating to the
                                            home renovation clients.</p>
                                        <div class="p-3 visiblelive opacity-0">
                                            <div
                                                class="flex gap-2 items-center border border-[#79ff66] text-[green] w-fit rounded-3xl px-3">
                                                <span class="w-2 h-2 bg-[red] rounded-full block animatelive"></span>Live
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img src={anv}
                                            alt="anv" /></div>
                                        <div class="d-flex p-3" style={{alignSelf:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Akshar Numerics & Vastu</h2>
                                                <h2 class="position-absolute">Akshar Numerics & Vastu
                                                </h2>
                                            </div>
                                            <a href="https://www.nehhamathankar.com/"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">As per client requirement i
                                            have design the well clear & maintained structure & layout of this website.</p>
                                        <div class="p-3 visiblelive opacity-0">
                                            <div
                                                class="flex gap-2 items-center border border-[#79ff66] text-[green] w-fit rounded-3xl px-3">
                                                <span class="w-2 h-2 bg-[red] rounded-full block animatelive"></span>Live
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}><img
                                            src={bmcol} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">BMCOL</h2>
                                                <h2 class="position-absolute">Hospital</h2>
                                            </div>
                                            <a href="https://bmcol.com.au/"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">The Brunswick Medical Centre On
                                            Lygon one is my first live website which i designed a clients as per there needs
                                            requirement in there hospitality management.</p>
                                        <div class="p-3 visiblelive opacity-0">
                                            <div
                                                class="flex gap-2 items-center border border-[#79ff66] text-[green] w-fit rounded-3xl px-3">
                                                <span class="w-2 h-2 bg-[red] rounded-full block animatelive"></span>Live
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="projects"
                                    class="educationanimation rounded">
                                    <div class="alleductionanimation p-3">
                                        <div class="border border-dark rounded" style={{height:'13.8em',overflow:'hidden'}}>
                                            <img src={flipkartdummy} alt="" /></div>
                                        <div class="d-grid p-3" style={{gridTemplateColumns:'1fr auto',alignContent:'center',justifyContent:'space-between'}}>
                                            <div class="animated-text">
                                                <h2 class="">Flipkart Clone Design</h2>
                                                <h2 class="position-absolute">Flipkart Clone Design
                                                </h2>
                                            </div>
                                            <a href="https://github.com/Sayrabhg/FlipkartDemo"
                                                class="icons"><ReadMore /></a>
                                        </div>
                                        <p class="px-3 pb-4">In this flipkart website clone
                                            had my first started joruney in the web development, in which i designed exact same
                                            copy and structure layout design on flipkart realtime site.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}