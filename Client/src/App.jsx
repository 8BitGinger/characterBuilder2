import React, { useState } from 'react';
import './App.css';

import logo from './assets/memoria.png';

const questions = [
  { id: 1, question: 'What is your Characters name?', type: 'text' },
  {
    id: 2,
    question: 'What Race would you like to play?',
    type: 'select',
    options: [
      'Badgurix',
      'Augtens',
      'Asura',
      'Archs',
      'Antaleer',
      'Ikaw',
      'Gira',
      'Isegun',
      'Glowhraun',
      'Telecliss',
      'Hwamps',
      'Giants',
      'Taurava',
      'Warve',
      'Selvan',
      'Namors',
      'Elvitch Spirit Rider',
      'Taotum',
      'Vulturan',
      'Ryderz',
      'Lightling',
      'Musculus',
      'Gemborne',
      'Elves',
      'Larve',
      'Ruetree',
      'Eltic',
      'Viporian',
      'Crimrik',
      'Mirrormen',
      'Froll',
      'Peaton',
      'Roostins',
      'Dragonaire',
      'Dwarves',
      'Humans',
      'Contruct',
      'Panthari',
      'Redhorn',
      'Minotaur',
      'Laotu',
      'Turtan',
      'Djinni',
      'Foxum',
      'Havgin',
      'Ramiel',
      'Centorc',
      'Tunkles',
      'Denbark',
      'Owlec',
      'Jedanako',
      'Torro',
      'Gorak',
      'Caneis',
      'Spelorian',
      'Troll',
      'Q',
      'Soulless',
      'Demon',
      'Zarut',
      'Otorc',
      'Brinx',
      'Toric',
      'Duogoblin',
      'Melanni',
      'Gonjic',
      'Jaddehb',
      'Polkans',
      'Zadnaut',
      'Skorc',
      'Delvian',
      'Tib',
      'Orc',
      'Jackal',
      'Drowland',
      'Manticlus',
      'Octubian',
      'Dawsp',
      'Boon',
      'Trinon',
      'Shifter',
      'Thyst',
      'Wereman',
      'Ivotien',
      'Mannenite',
      'Dragon',
      'Oakrels',
      'Felynx',
      'Treeton',
      'Goblin',
      'Blood Elf',
      'Cuth',
      'Magelv',
      'Bisanu',
      'Potec',
      'Banda',
      'Cabat',
      'Cossakus',
    ],
  },
  { id: 3, question: 'What is your Characters age?', type: 'number' },
  {
    id: 4,
    question: 'What is your Characters Origin?',
    type: 'select',
    options: [
      'Divine',
      'Eye',
      'Mind',
      'Body',
      'Husk - *Evil only',
      'Insane - *Evil only',
    ],
  },
  {
    id: 5,
    question: 'What is your Focus?',
    type: 'select',
    options: [
      'Light',
      'Teleportation',
      'Fire',
      'Air',
      'Mind',
      'Body',
      'Lightning',
      'Health',
      'Water',
    ],
  },
  { id: 6, question: 'What is your Characters goal?', type: 'text' },
  { id: 7, question: 'What is your Characters flaw?', type: 'text' },
  { id: 8, question: 'What is your Characters strength?', type: 'text' },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const generatePrintout = () => {
    const printoutContent = Object.entries(answers).map(
      ([questionId, answer]) => {
        const question = questions.find(
          (q) => q.id === parseInt(questionId)
        ).question;

        return `<div className='questionAnswer' key="${questionId}">
          <p>
            <strong>${question}:</strong> ${answer}
          </p>
        </div>`;
      }
    );

    const printElement = document.createElement('div');
    printElement.innerHTML = `
    <html>
      <head>
        <title>Printout</title>
        <style>
          /* Add any necessary print styles here */
          body { font-family: sans-serif; }
          p { margin-bottom: 5px; }
        </style>
      </head>
      <body>
        <h1>Your Character Breakdown</h1>
        ${printoutContent.join('')} 
      </body>
    </html>
  `;

    // Open a new window for printing
    const printWindow = window.open('', '_blank');

    // Write the print content to the new window's document
    printWindow.document.write(printElement.innerHTML);

    printWindow.document.close();
    printWindow.focus();

    // Delay the print command slightly to ensure content is loaded
    setTimeout(() => {
      printWindow.print();
    }, 200);
  };

  return (
    <div>
      <img className="logo" src={logo} alt="Memoria Logo" />

      {/* Display current question */}
      <h2>{currentQuestion.question}</h2>

      {/* Render input based on question type */}
      {currentQuestion.type === 'text' && (
        <input
          type="text"
          value={answers[currentQuestion.id] || ''}
          onChange={(e) =>
            setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
          }
        />
      )}
      {currentQuestion.type === 'select' && (
        <select
          value={answers[currentQuestion.id] || ''}
          onChange={(e) =>
            setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
          }
        >
          <option value="">Select an Option</option>
          {currentQuestion.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      {currentQuestion.type === 'number' && (
        <input
          type="number"
          value={answers[currentQuestion.id] || ''}
          onChange={(e) =>
            setAnswers({ ...answers, [currentQuestion.id]: e.target.value })
          }
        />
      )}

      {/* Display current answer */}
      <div className="questionAnswer">
        <p>
          <strong>Your Answer:</strong> {answers[currentQuestion.id] || ''}
        </p>
      </div>

      {/* Navigation buttons */}
      <div>
        {currentQuestionIndex > 0 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {currentQuestionIndex < questions.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
        <button onClick={() => setAnswers({})}>Reset</button>
      </div>

      {/* Generate printout button */}
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={generatePrintout}>Generate Printout</button>
      )}
    </div>
  );
}

export default App;
