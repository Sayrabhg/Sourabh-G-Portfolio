import Circularbar from './SubPages/Circularbar'
import '../styles/skills.css'

export default function Skills(){
    return <>
    <section id="Skills">
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="div03">
                        <div id="skills" class="div3">
                            <h1 class="">Skills</h1>
                        </div>
                        <main class="main21 d-grid gap-4">
                            <div id="skills" class="">
                                <p class="">In the time of graduation i
                                    completed my front end basic skills of the common languages. When pursuing my MCA (Master Of
                                    Computer Application) Degree, I have been doing my coding skills about following
                                    technical languages.</p>
                            </div>
                            <Circularbar />
                            <div id="skills">
                                <p class="lg:text-lg/7 sm:text-3xl/10 text-justify">The above languages progress bar telling
                                    about my programming knowlegde on progress level</p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}