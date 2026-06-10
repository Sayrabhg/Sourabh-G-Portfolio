import { useState } from "react";
import '../styles/Projects.css'
import ReadMore from './SubPages/ReadMore'
import projects from './Data/Projects'

export default function Projects() {

    const [filter, setFilter] = useState("all");
    const [deployed, setDeployed] = useState(false);

    const filteredProjects = projects
        .filter(p => filter === "all" || p.category === filter)
        .filter(p => !deployed || p.deployed === true);

    return (
        <section id="main-projects">
            <div className="container py-5">
                <aside className="aside33">
                    <h1 className="py-2">Projects</h1>

                    {/* ✅ Filter Buttons */}
                    <div className="d-flex fbtns gap-3 px-4 pb-3 flex-wrap justify-content-center">
                        <button onClick={() => setFilter("all")} className={`btn ${filter === "all" ? "btn-dark" : "btn-outline-dark"}`}>All</button>
                        <button onClick={() => setFilter("frontend")} className={`btn ${filter === "frontend" ? "btn-dark" : "btn-outline-dark"}`}>Frontend</button>
                        <button onClick={() => setFilter("backend")} className={`btn ${filter === "backend" ? "btn-dark" : "btn-outline-dark"}`}>Backend</button>
                        <button onClick={() => setFilter("fullstack")} className={`btn ${filter === "fullstack" ? "btn-dark" : "btn-outline-dark"}`}>Full Stack</button>
                        <button onClick={() => setFilter("wordpress")} className={`btn ${filter === "wordpress" ? "btn-dark" : "btn-outline-dark"}`}>WordPress</button>
                        <button onClick={() => setDeployed(!deployed)} className={`btn ${deployed ? "btn-dark" : "btn-outline-dark"}`}>Deployed</button>
                    </div>

                    {/* ✅ Grid */}
                    <div id="projects" className="d-grid p-4" style={{ gap: '3em 2em' }}>
                        {filteredProjects.map((proj, idx) => (
                            <div key={idx} className="educationanimation rounded border visible">
                                <div className="alleductionanimation p-3">

                                    <div className="border border-dark rounded" style={{ height: '13.8em', overflow: 'hidden' }}>
                                        <img src={proj.img} alt={proj.title} />
                                    </div>

                                    <div className="d-grid p-3" style={{
                                        gridTemplateColumns: '1fr auto',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div className="animated-text">
                                            <h2>{proj.title}</h2>
                                            <h2 className="position-absolute">{proj.subtitle}</h2>
                                        </div>

                                        <a href={proj.link} className="icons" target="_blank" rel="noopener noreferrer">
                                            <ReadMore />
                                        </a>
                                    </div>

                                    <p className="px-3 pb-4">{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </aside>
            </div>
        </section>
    );
}