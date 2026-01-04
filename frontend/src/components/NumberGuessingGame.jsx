import React, { useState } from 'react';

const NumberGuessingGame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (isNaN(numGuess) || numGuess < 1 || numGuess > 100) {
      setMessage('Please enter a valid number between 1 and 100');
      return;
    }

    setAttempts(attempts + 1);

    if (numGuess === targetNumber) {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts!`);
      setGameOver(true);
    } else if (numGuess < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }

    setGuess('');
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('Guess a number between 1 and 100');
    setAttempts(0);
    setGameOver(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !gameOver) {
      handleGuess();
    }
  };

  return (
    <div className="text-center">
      <p className="text-white mb-4">{message}</p>
      {!gameOver && (
        <div className="mb-4">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyPress={handleKeyPress}
            min="1"
            max="100"
            className="w-20 px-2 py-1 text-center bg-gray-700 text-white rounded"
            placeholder="?"
          />
          <button
            onClick={handleGuess}
            className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Guess
          </button>
        </div>
      )}
      <p className="text-white mb-4">Attempts: {attempts}</p>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        New Game
      </button>
    </div>
  );
};

export default NumberGuessingGame;
