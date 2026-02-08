import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './styles/All.css'
import Home from './Home'
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import ContactForm from './Pages/ContactForm';
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Services from './Pages/Services';
import Certificate from './Pages/Certifications';

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Resume' element={<Resume />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
          <Route path='/contact' element={<ContactForm />}></Route>
          <Route path='/Services' element={<Services />}></Route>
          <Route path='/certification' element={<Certificate />}></Route >
        </Routes>
        <Footer />
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App;
