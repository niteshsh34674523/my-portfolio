
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠', color: 'from-blue-500 to-purple-600' },
    { path: '/experience', label: 'Experience', icon: '💼', color: 'from-green-500 to-teal-600' },
    { path: '/skills', label: 'Skills', icon: '🛠️', color: 'from-orange-500 to-red-600' },
    { path: '/projects', label: 'Projects', icon: '🚀', color: 'from-purple-500 to-pink-600' },
    { path: '/achievements', label: 'Achievements', icon: '🏆', color: 'from-yellow-500 to-orange-600' },
    { path: '/education', label: 'Education', icon: '🎓', color: 'from-indigo-500 to-blue-600' },
    { path: '/contact', label: 'Contact', icon: '📧', color: 'from-pink-500 to-rose-600' }
  ];

  return (
    <aside className="w-72 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 p-6 border-r border-gray-700 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-purple-900/10 animate-pulse"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Logo/Brand */}
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 animate-pulse shadow-lg">
            N
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-2"></div>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="space-y-3">
            {navItems.map((item, index) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 transform ${
                    location.pathname === item.path
                      ? `bg-gradient-to-r ${item.color} text-white shadow-lg scale-105`
                      : 'text-gray-300 hover:bg-gray-700/50 hover:scale-102'
                  }`}
                >
                  {/* Icon with gradient background */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-white/20'
                      : hoveredItem === index
                        ? `bg-gradient-to-br ${item.color} text-white`
                        : 'bg-gray-700'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Label */}
                  <span className="font-medium">{item.label}</span>

                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}

                  {/* Hover effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        
      </div>
    </aside>
  );
};

export default Sidebar;
