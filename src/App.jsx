import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/All.css'
import Home from './Home'
import About from './Pages/About';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import ContactForm from './Pages/ContactForm';
import Nav from './components/Nav';
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App;
