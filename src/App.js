import React from 'react';
import './App.css';
import Summary from './components/Summary';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Summary />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      
      {/* Sonraki bölümler: Skills, Certifications, Soft Skills */}
    </div>
  );
}

export default App;
