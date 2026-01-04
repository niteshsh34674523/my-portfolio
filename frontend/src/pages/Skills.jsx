import React from 'react';
import SkillCard from '../components/SkillCard.jsx';

// Languages
import C from '../assets/C.svg';
import CPP from '../assets/C++.svg';
import JavaScript from '../assets/JavaScript.svg';
import Python from '../assets/Python.svg';

// Frontend
import HTML from '../assets/HTML5.svg';
import CSS from '../assets/CSS3.svg';
import ReactLogo from '../assets/React.svg';
import Tailwind from '../assets/Tailwind CSS.svg';

// Backend
import Node from '../assets/Node.js.svg';
import Express from '../assets/Express.svg';
import MongoDB from '../assets/MongoDB.svg';
import MySQL from '../assets/MySQL.svg';

// Tools
import Git from '../assets/Git.svg';
import GitHub from '../assets/GitHub.svg';
import VSCode from '../assets/Visual Studio Code (VS Code).svg';
import Postman from '../assets/Postman.svg';

const Skills = () => {
  const skillsData = {
    Languages: [
      { name: 'C', icon: C, level: 85 },
      { name: 'C++', icon: CPP, level: 80 },
      { name: 'JavaScript', icon: JavaScript, level: 90 },
      { name: 'Python', icon: Python, level: 85 }
    ],
    Frontend: [
      { name: 'HTML', icon: HTML, level: 95 },
      { name: 'CSS', icon: CSS, level: 90 },
      { name: 'React', icon: ReactLogo, level: 85 },
      { name: 'Tailwind CSS', icon: Tailwind, level: 80 }
    ],
    Backend: [
      { name: 'Node.js', icon: Node, level: 80 },
      { name: 'Express.js', icon: Express, level: 75 },
      { name: 'MongoDB', icon: MongoDB, level: 70 },
      { name: 'MySQL', icon: MySQL, level: 75 }
    ],
    Tools: [
      { name: 'Git', icon: Git, level: 85 },
      { name: 'GitHub', icon: GitHub, level: 80 },
      { name: 'VS Code', icon: VSCode, level: 90 },
      { name: 'Postman', icon: Postman, level: 75 }
    ]
  };

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>

      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category}>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">
            {category}
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
