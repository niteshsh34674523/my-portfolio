import React, { useState, useEffect } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [flippedCards, setFlippedCards] = useState({});
  const [showGame, setShowGame] = useState(false);
  const [gameScore, setGameScore] = useState(0);

  const projectsData = [
    {
      title: "REST Countries Application",
      tech: "ReactJS, JavaScript",
      period: "March 2025 – July 2025",
      category: "Frontend",
      description: [
        "Developed a responsive React application using the REST Countries API to display country data dynamically.",
        "Implemented features including dark mode, search and filter, and dynamic data fetching for seamless user experience.",
        "Built a clean component structure with effective state management for scalability and maintainability.",
      ],
    },
    {
      title: "Job Portal Web Application",
      tech: "MERN Stack",
      period: "December 2024 – March 2025",
      category: "Full Stack",
      description: [
        "Developed a full-stack Job Portal to connect job seekers and recruiters.",
        "Implemented user authentication and authorization for separate recruiter and applicant dashboards using JWT.",
        "Enabled real-time job posting, search, and application tracking with dynamic filtering based on job type, skills, and location.",
        "Integrated RESTful APIs for managing users, jobs, and applications with efficient CRUD operations.",
        "Designed a responsive and modern UI ensuring smooth performance and accessibility across all devices.",
      ],
    },
    {
      title: "Full Stack Text-to-Image Generator AI SaaS Application",
      tech: "MERN Stack",
      period: "December 2025 – Present",
      category: "Full Stack",
      description: [
        "Developed a full-stack AI-driven web application using MongoDB, Express.js, ReactJS, and Node.js to generate images from text prompts.",
        "Implemented user authentication and authorization with secure account creation and login flows.",
        "Integrated AI image generation functionality using a third-party API (e.g., Clipdrop API) to convert user text into visual content.",
        "Built a credit-based usage system and integrated online payment gateway enabling users to purchase additional credits for image generation.",
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(projectsData.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  const handleCardFlip = (index) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const TechStackGame = () => {
    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [moves, setMoves] = useState(0);

    const techStacks = [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JavaScript",
      "AI",
    ];

    useEffect(() => {
      const shuffledCards = [...techStacks, ...techStacks]
        .sort(() => Math.random() - 0.5)
        .map((tech, index) => ({
          id: index,
          tech,
          isFlipped: false,
          isMatched: false,
        }));
      setCards(shuffledCards);
    }, [techStacks]);

    const handleCardClick = (id) => {
      if (flipped.length === 2 || flipped.includes(id) || matched.includes(id))
        return;

      const newFlipped = [...flipped, id];
      setFlipped(newFlipped);

      if (newFlipped.length === 2) {
        setMoves(moves + 1);
        const [first, second] = newFlipped;
        if (cards[first].tech === cards[second].tech) {
          setMatched([...matched, first, second]);
          setGameScore((prev) => prev + 10);
          setFlipped([]);
        } else {
          setTimeout(() => setFlipped([]), 1000);
        }
      }
    };

    return (
      <div className="mt-8 p-6 bg-gray-800 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Tech Stack Memory Game
        </h3>
        <p className="text-gray-300 mb-4">
          Score: {gameScore} | Moves: {moves}
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`w-20 h-20 flex items-center justify-center rounded cursor-pointer transition-all duration-300 ${
                flipped.includes(card.id) || matched.includes(card.id)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-700"
              }`}
            >
              {flipped.includes(card.id) || matched.includes(card.id)
                ? card.tech
                : "?"}
            </div>
          ))}
        </div>
        {matched.length === cards.length && (
          <p className="text-green-400 mt-4">
            Congratulations! You matched all tech stacks!
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Toggle Game Button */}
        <button
          onClick={() => setShowGame(!showGame)}
          className="mb-8 px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          {showGame ? "Hide Tech Stack Game" : "Play Tech Stack Game"}
        </button>
      </div>

      {/* Tech Stack Game */}
      {showGame && <TechStackGame />}

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="perspective-1000 cursor-pointer"
            onClick={() => handleCardFlip(index)}
          >
            <div
              className={`relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d ${
                flippedCards[index] ? "rotate-y-180" : ""
              }`}
            >
              {/* Front of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg p-6 flex flex-col justify-center items-center text-white">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.tech}</p>
                <p className="text-xs opacity-75 mt-2">{project.period}</p>
                <div className="mt-4 text-4xl">🔄</div>
                <p className="text-xs mt-2">Click to flip</p>
              </div>

              {/* Back of Card */}
              <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-lg p-6 flex flex-col overflow-y-auto">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4">
                    {project.tech} | {project.period}
                  </p>

                  <ul className="text-gray-300 text-sm space-y-1 pr-2">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-500 mt-4 text-center">
                  Click to flip back
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
