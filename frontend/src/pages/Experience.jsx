import React from 'react';
import ExperienceCard from '../components/ExperienceCard.jsx';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Development Intern',
      company: 'Prasunet',
      duration: 'July 2024 – August 2024',
      description: 'Gained hands-on experience in real-time web application development using the MERN stack. Integrated Daisy UI themes using TailwindCSS for a customizable UI. Provides experience in CRUD operations for database management. Teaches essential security practices.'
    },
    // Add more experiences as needed
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            role={exp.role}
            company={exp.company}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
