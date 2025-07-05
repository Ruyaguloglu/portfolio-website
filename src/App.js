import React from 'react';
import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contact from './components/Contact';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('/Desktop.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center top',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Landing />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact /> {/* 👈 Eklemiş olduk */}
    </div>
  );
}


export default App;
