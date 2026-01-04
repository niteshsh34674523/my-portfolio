import React, { useState } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science (Data Science)',
      institution: 'Swami Keshvanand Institute of Technology, Management & Gramothan, Jaipur',
      location: 'Jaipur, Rajasthan',
      period: '2023 – Present',
      grade: 'CGPA: 8.5',
      icon: '🎓',
      color: 'from-blue-500 to-purple-500',
      emoji: '🚀',
      funFact: 'Currently building the future of data science! 📊',
      achievements: ['Data Science Focus', 'Machine Learning Enthusiast', 'Research Oriented']
    },
    {
      degree: 'Senior Secondary (RBSE)',
      institution: 'Impulse Academy Sen Sec School',
      location: 'Jaipur, Rajasthan',
      period: '2022',
      grade: 'Percentage: 90% (PCM)',
      icon: '📚',
      color: 'from-green-500 to-teal-500',
      emoji: '🧮',
      funFact: 'PCM wizard who loved solving math puzzles! 🧩',
      achievements: ['Mathematics Excellence', 'Physics Champion', 'Chemistry Explorer']
    },
    {
      degree: 'Secondary (RBSE)',
      institution: 'Kids Care International School',
      location: 'Jaipur, Rajasthan',
      period: '2020',
      grade: 'Percentage: 94.5%',
      icon: '🌟',
      color: 'from-yellow-500 to-orange-500',
      emoji: '🎯',
      funFact: 'Started my academic journey with flying colors! 🌈',
      achievements: ['Academic Excellence', 'All-rounder Student', 'Leadership Skills']
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-90"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating book and graduation cap emojis */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
              fontSize: `${18 + Math.random() * 15}px`
            }}
          >
            {['📚', '🎓', '📖', '✏️', '🔬', '🧮', '🌟', '🎯', '🚀', '💡'][i]}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent mb-4 animate-fade-in-up flex items-center justify-center">
            <span className="mr-4">🎓</span>
            Learning Journey
            <span className="ml-4">📚</span>
          </h2>
          <p className="text-xl text-gray-300 animate-fade-in-up animation-delay-500">
            From curious kid to tech enthusiast - my educational adventure! 🌟🚀
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-700/50 transform transition-all duration-500 hover:scale-102 hover:-translate-y-1 cursor-pointer ${
                activeIndex === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Education badge */}
              <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl animate-bounce">{edu.icon}</span>
              </div>

              {/* Timeline connector */}
              {index < educationData.length - 1 && (
                <div className="absolute left-6 top-full w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Emoji indicator */}
                <div className="flex-shrink-0">
                  <span className="text-4xl animate-pulse">{edu.emoji}</span>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-blue-300 transition-colors duration-300">
                        {edu.degree}
                      </h3>
                      <p className="text-blue-400 font-semibold text-lg mb-1">{edu.institution}</p>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">📍</span>
                          {edu.location}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">📅</span>
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <div className={`text-right mt-4 md:mt-0 px-4 py-2 bg-gradient-to-r ${edu.color} rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300`}>
                      <div className="text-white font-bold text-lg">{edu.grade}</div>
                      <div className="text-white/80 text-sm">Grade</div>
                    </div>
                  </div>

                  {/* Expandable achievements section */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600/50">
                      <div className="flex items-center mb-3">
                        <span className="text-yellow-400 mr-2">💡</span>
                        <span className="text-yellow-300 font-semibold">{edu.funFact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm rounded-full transform hover:scale-105 transition-all duration-300 animate-fade-in-up`}
                            style={{ animationDelay: `${i * 0.1}s` }}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="mt-4 text-center">
                    <span className="text-gray-500 text-sm animate-pulse">
                      {activeIndex === index ? '👆 Click to collapse' : '👆 Click to expand achievements'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Fun education stats */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
              <span className="mr-3">📊</span>
              Academic Highlights
              <span className="ml-3">🎯</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  8.5
                </div>
                <div className="text-gray-300 text-sm">Current CGPA</div>
                <div className="text-yellow-400 text-xs mt-1">🚀</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  94.5%
                </div>
                <div className="text-gray-300 text-sm">Highest Score</div>
                <div className="text-yellow-400 text-xs mt-1">⭐</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <div className="text-gray-300 text-sm">Educational Milestones</div>
                <div className="text-yellow-400 text-xs mt-1">🏆</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  90%+
                </div>
                <div className="text-gray-300 text-sm">Consistent Performance</div>
                <div className="text-yellow-400 text-xs mt-1">💪</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
