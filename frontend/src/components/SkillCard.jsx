import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ name, icon, level }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div
      className={`group relative bg-gray-800 p-6 rounded-xl shadow-lg
      hover:shadow-2xl transition-all duration-500 transform
      hover:scale-110 hover:-translate-y-2 border border-gray-700
      hover:border-blue-400/50 cursor-pointer
      ${isClicked ? 'animate-wiggle' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="text-center relative">

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random()}s`,
                }}
              />
            ))}
          </div>
        )}

        {/* Icon */}
        <div
          className={`mb-4 transition-all duration-500
          ${isHovered ? 'animate-bounce scale-125' : ''}
          ${isClicked ? 'animate-wiggle' : ''}`}
        >
          {icon.startsWith('<svg') ? (
            <div
              className="w-10 h-10 mx-auto"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ) : (
            <img
              src={icon}
              alt={name}
              className="w-10 h-10 mx-auto object-contain"
            />
          )}
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white mb-2
          group-hover:text-blue-300 transition-colors duration-300
          flex items-center justify-center">
          <span className="mr-2">{isHovered ? '⚡' : '🔧'}</span>
          {name}
        </h3>

        {/* Progress Bar */}
        <div className="relative w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
          <div
            className={`bg-gradient-to-r from-blue-500 to-purple-500 h-3
            rounded-full transition-all duration-1000 ease-out
            ${isHovered ? 'animate-glow' : ''}`}
            style={{ width: `${level}%` }}
          />
        </div>

        {/* Percentage */}
        <span className="text-sm text-gray-400 group-hover:text-gray-300 font-medium">
          {level}% {isHovered && '🎯'}
        </span>

        {/* Level dots */}
        <div className="mt-3 flex justify-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300
              ${
                i < Math.floor(level / 20)
                  ? 'bg-blue-400 animate-pulse'
                  : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r
        from-blue-600/10 to-purple-600/10 opacity-0
        group-hover:opacity-100 transition-opacity duration-500" />

      {/* Click ripple */}
      {isClicked && (
        <div className="absolute inset-0 rounded-xl bg-blue-400/20 animate-ping" />
      )}
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillCard;
