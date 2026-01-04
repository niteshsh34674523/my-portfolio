import React from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = ({ role, company, duration, description }) => {
  return (
    <div className="group relative bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-700 hover:border-blue-400/50">
      {/* Timeline dot */}
      <div className="absolute -left-3 top-8 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900 group-hover:bg-blue-400 transition-colors duration-300"></div>

      {/* Timeline line */}
      <div className="absolute left-0 top-14 w-0.5 h-full bg-gradient-to-b from-blue-500 to-transparent opacity-50"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
              {role}
            </h3>
            <p className="text-blue-400 font-semibold text-lg">{company}</p>
          </div>
          <span className="text-gray-400 text-sm mt-2 md:mt-0 bg-gray-700 px-3 py-1 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
            {duration}
          </span>
        </div>
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

ExperienceCard.propTypes = {
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ExperienceCard;
