import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Experience from '../pages/Experience.jsx';
import Skills from '../pages/Skills.jsx';
import Projects from '../pages/Projects.jsx';
import Achievements from '../pages/Achievements.jsx';
import Education from '../pages/Education.jsx';
import Contact from '../pages/Contact.jsx';

const MainContent = () => {
  return (
    <main className="flex-1 p-4">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default MainContent;
