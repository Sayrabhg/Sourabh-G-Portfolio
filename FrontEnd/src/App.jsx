import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";
import "./styles/All.css";

import Home from "./Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Projects from "./Pages/Projects";
import ContactForm from "./Pages/ContactForm";
import Services from "./Pages/Services";
import Certificate from "./Pages/Certifications";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Loader from "./Pages/Loader";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/certification" element={<Certificate />} />
        <Route path="/l" element={<Loader />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;