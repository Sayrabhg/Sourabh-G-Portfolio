import React from "react";
import '../js/Skills'
import '../styles/skills.css'
import bootstrap from '../assets/logos/bootstrap-wordmark.png'
import css from '../assets/logos/css3-logo-png_seeklogo-186678.png'
import html from '../assets/logos/html5-emblem-orange-shield-and-white-text-vector.png'
import fd from '../assets/logos/java-fullstack.png'
import java from '../assets/logos/java-logo.png'
import js from '../assets/logos/JavaScript-Logo.png'
import sql from '../assets/logos/mysql-logo-development-code-icon.png'
import php from '../assets/logos/pngimg.com - php_PNG43.png'
import tailwind from '../assets/logos/tailwind.png'

export default function Skills(){
    return <>
    <section id="Skills">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="div03">
                        <div id="skills" class="div3">
                            <h1 class="">Skills</h1>
                        </div>
                        <main class="main21">
                            <div id="skills" class="">
                                <p class="">In the time of graduation i
                                    completed my front end basic skills of the common languages. When pursuing my MCA (Master Of
                                    Computer Application) Degree, I have been doing my coding skills about following
                                    technical languages.</p>
                            </div>
                            <div id="skills" class="">
                                <div class="front-end">
                                    <h2 class="text-center">Front End</h2>
                                    <div class="all-cards">
                                        <div
                                            class="">
                                            <div class=""><img src={html} alt="Html 5" class="" /></div>
                                            {/* <!-- <p>Html5</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="80"
                                                data-progress-color="#e64d24" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>

                                        <div
                                            class="">
                                            <div class=""><img src={css} alt="Css 3" class="" />
                                            </div>
                                            {/* <!-- <p>Css3</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="80"
                                                data-progress-color="#2162af" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>
                                        <div
                                            class="">
                                            <div class=""><img src={bootstrap} alt="Bootstrap" class="" /></div>
                                            {/* <!-- <p>Bootstrap</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="46"
                                                data-progress-color="#7210e0" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>

                                        <div
                                            class="">
                                            <div class=""><img src={js} alt="Javascript" class="" /></div>
                                            {/* <!-- <p>Javascript</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="30"
                                                data-progress-color="#e4a126" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>

                                        <div
                                            class="">
                                            <div class=""><img src={tailwind} alt="Tailwind" class="" /></div>
                                            {/* <!-- <p>Tailwind</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="40"
                                                data-progress-color="#38bdf8" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="back-end">
                                    <h2 class="text-center font-black lg:py-5 sm:py-10 lg:text-2xl sm:text-4xl">Back End</h2>
                                    <div class="all-cards flex gap-5">
                                        <div
                                            class="">
                                            <div class=""><img src={fd} alt="Fullstack Developer" class="" />
                                            </div>
                                            {/* <!-- <p>Fullstack Developer</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="54"
                                                data-progress-color="#2ebb00" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>

                                        <div
                                            class="">
                                            <div class=""><img src={java} alt="Core Java" class="" /></div>
                                            {/* <!-- <p>Core Java</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="60"
                                                data-progress-color="#c92c2d" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="database">
                                    <h2 class="text-center font-black lg:py-5 sm:py-10 lg:text-2xl sm:text-4xl">Database</h2>
                                    <div class="databases flex gap-5">
                                        <div
                                            class="">
                                            <div class=""><img src={sql} alt="Sql" class="" />
                                            </div>
                                            {/* <!-- <p>Sql</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="50"
                                                data-progress-color="#e49329" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>
                                        <div
                                            class="">
                                            <div class=""><img src={php} alt="Php" class="" /></div>
                                            {/* <!-- <p>Php</p> --> */}
                                            <div class="circular-progress" data-inner-circle-color="white" data-percentage="54"
                                                data-progress-color="#6e81b6" data-bg-color="#00000036">
                                                <div class="inner-circle"></div>
                                                <p class="percentage">0%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="skills" class="py-5">
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