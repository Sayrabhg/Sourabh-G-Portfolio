import { useEffect } from "react";
import bootstrap from "../assets/logos/bootstrap-wordmark.png";
import css from "../assets/logos/css3-logo-png_seeklogo-186678.png";
import html from "../assets/logos/html5-emblem-orange-shield-and-white-text-vector.png";
import fd from "../assets/logos/java-fullstack.png";
import java from "../assets/logos/java-logo.png";
import js from "../assets/logos/JavaScript-Logo.png";
import sql from "../assets/logos/mysql-logo-development-code-icon.png";
import php from "../assets/logos/pngimg.com - php_PNG43.png";
import tailwind from "../assets/logos/tailwind.png";
import "../styles/skills.css";

export default function Circularbar() {
    const img = {
        size: "100px",
    };

    useEffect(() => {
        const circularProgress = document.querySelectorAll(".circular-progress");

        const observerOptions = {
            threshold: 0.1, // 10% visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;

                    const progressValue = progressBar.querySelector(".percentage");
                    const innerCircle = progressBar.querySelector(".inner-circle");
                    let startValue = 0,
                        endValue = Number(progressBar.getAttribute("data-percentage")),
                        speed = 50,
                        progressColor = progressBar.getAttribute("data-progress-color");

                    const progress = setInterval(() => {
                        startValue++;
                        progressValue.textContent = `${startValue}%`;

                        innerCircle.style.backgroundColor =
                            progressBar.getAttribute("data-inner-circle-color");

                        progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
                            }deg, ${progressBar.getAttribute("data-bg-color")} 0deg)`;

                        if (startValue === endValue) {
                            clearInterval(progress);
                        }
                    }, speed);

                    // Stop observing after animation starts
                    observer.unobserve(progressBar);
                }
            });
        }, observerOptions);

        circularProgress.forEach((bar) => observer.observe(bar));

        return () => {
            observer.disconnect(); // cleanup
        };
    }, []);

    return (
        <>
            <div id="skills" className="d-grid gap-5">
                {/* ---------------- Front End ---------------- */}
                <div className="front-end">
                    <h2 className="text-center">Front End</h2>
                    <div className="all-cards d-grid gap-5 justify-content-center">
                        <SkillCard imgSrc={html} alt="Html 5" percentage="80" color="#e64d24" />
                        <SkillCard imgSrc={css} alt="Css 3" percentage="80" color="#2162af" />
                        <SkillCard imgSrc={bootstrap} alt="Bootstrap" percentage="46" color="#7210e0" />
                        <SkillCard imgSrc={js} alt="Javascript" percentage="30" color="#e4a126" />
                        <SkillCard imgSrc={tailwind} alt="Tailwind" percentage="40" color="#38bdf8" />
                    </div>
                </div>

                {/* ---------------- Back End ---------------- */}
                <div className="back-end">
                    <h2 className="text-center">Back End</h2>
                    <div className="all-cards1 d-grid gap-5 justify-content-center">
                        <SkillCard imgSrc={fd} alt="Fullstack Developer" percentage="54" color="#2ebb00" />
                        <SkillCard imgSrc={java} alt="Core Java" percentage="60" color="#c92c2d" />
                    </div>
                </div>

                {/* ---------------- Database ---------------- */}
                <div className="database">
                    <h2 className="text-center">Database</h2>
                    <div className="databases d-grid gap-5 justify-content-center">
                        <SkillCard imgSrc={sql} alt="Sql" percentage="50" color="#e49329" />
                        <SkillCard imgSrc={php} alt="Php" percentage="54" color="#6e81b6" />
                    </div>
                </div>
            </div>
        </>
    );
}

// Reusable SkillCard Component
function SkillCard({ imgSrc, alt, percentage, color }) {
    return (
        <div className="c1">
            <div style={{ height: "100px", alignContent: "center" }}>
                <img src={imgSrc} alt={alt} style={{ width: "100px" }} />
            </div>
            <div
                className="circular-progress"
                data-inner-circle-color="white"
                data-percentage={percentage}
                data-progress-color={color}
                data-bg-color="#00000036"
            >
                <div className="inner-circle"></div>
                <p className="percentage">0%</p>
            </div>
        </div>
    );
}
