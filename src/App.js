import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#about">Portfolio</a>
          <div>
            <a className="nav-link d-inline text-white" href="#about">About</a>
            <a className="nav-link d-inline text-white" href="#projects">Projects</a>
            {/* <a className="nav-link d-inline text-white" href="#education">Education</a> */}
            <a className="nav-link d-inline text-white" href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <div className="container pt-5">
        <h1 className="text-center mt-5 mb-4 section-title">Rutuparn Deshpande Portfolio</h1>
        <About />
        <Projects/>
        {/* <Skills /> */}
        {/* <Education /> */}
        <ContactForm />
      </div>
    </>
  );
}

export default App;
