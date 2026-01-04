import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <MainContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
