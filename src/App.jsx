import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/All.css'
import Home from './Home'
import Nav from './Components/Nav'
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {

  return (
    <>
    
    <Router>
        <Nav />
        <Routes>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Resume' element={<Resume />}></Route>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App;
