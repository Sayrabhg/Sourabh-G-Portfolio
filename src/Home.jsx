import Slider from "./Pages/Slider";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";

export default function Home() {
    return <>
        <section id="Home">
            <Slider />
            <About />
            <Resume />
            <Skills />
            <Projects />
        </section>
    </>;
}