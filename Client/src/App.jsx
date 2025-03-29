import React, { useState, useEffect } from 'react';
import './App.css';

// Import questions and mappings for character generation
import questions from './utilities/questions'; 
import raceMapping from './utilities/raceMapping';
import originMapping from './utilities/originMapping'; 
import focusMapping from './utilities/focusMapping';

// Import assets
import logo from './assets/memoria.png';
import { GrPowerReset } from "react-icons/gr";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];

  const [currentRace, setCurrentRace] = useState('');
  const [currentOrigin, setCurrentOrigin] = useState('');
  const [currentFocus, setCurrentFocus] = useState('');
  const [character, setCharacter] = useState({});

  // Handle navigation between questions
  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCurrentRace('');
    setCurrentOrigin('');
    setCurrentFocus('');
  }

  // Generate character based on answers
  

  const generateCharacter = () => {
    const character = {

      name: answers[1],
      race: answers[2],
      age: answers[3],
      origin: answers[4],
      focus: answers[5],
      goal: answers[6],
      flaw: answers[7],
      strength: answers[8],
      
    };

    setCharacter(character); // Store the character object in state

    if (character && character.race && raceMapping[character.race]) {
      setCurrentRace(raceMapping[character.race]);
    } 

    if (character && character.origin && originMapping[character.origin]) {
      setCurrentOrigin(originMapping[character.origin]);
    }

    if (character && character.focus && focusMapping[character.focus]) {
      setCurrentFocus(focusMapping[character.focus]);
    }


    alert('Generating Character......click ok to Print!');
    generatePrintout(character); // Call the printout function with the character object
    console.log('Character:', character);
  };


 
// Generate printout of character build
  // This function creates a printout of the character build based on the answers provided by the user.

  const generatePrintout = (character) => {
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

    const characterDetails = `
          <li> <strong>Character Build:</strong> </li>
         <li> <strong>Name:</strong> ${character.name} </li>
          <li> <strong>Race:</strong> ${currentRace} </li>
          <li> <strong>Age:</strong> ${character.age} </li>
          <li> <strong>Origin:</strong> ${currentOrigin} </li>
          <li> <strong>Focus:</strong> ${currentFocus} </li>
         <li> <strong>Goal:</strong> ${character.goal} </li>
         <li> <strong>Flaw:</strong> ${character.flaw} </li>
         <li> <strong>Strength:</strong> ${character.strength} </li>
    `;





    const printElement = document.createElement('div');
    printElement.innerHTML = `
      <html>
        <head>
          <title>Memoria Character Builder</title>
          <style>
            /* Add your print styles here */
            body { font-family: Arial, sans-serif;
            }
            h1 { color: #f4f4f4; }
            h1 { text-align: center; }
            img { width: 300px; height: auto; display: block; margin: 0 auto; }
            div { display: flex; flex-direction: row align-items: center; }
            .container { padding: 20px; }
            /* ... other styles ... */
          </style>
        </head>
        <body>
          <h1>Character Build Cheatsheet</h1>
          <img className="logo" src=${logo} alt="Memoria Logo" />
          <div>
          <ul>
          ${printoutContent.join('')}
          </ul>
          <ul>
          ${characterDetails}
          </ul>
          </div>

        </body>
      </html>
    `;
 
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printElement.innerHTML);
    printWindow.document.close();
    printWindow.focus();
 
    setTimeout(() => {
      printWindow.print();
    }, 200);
  };

  return (
    <div className='container'>
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

     {/*  <div className="questionAnswer">
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
                {currentQuestionIndex > 0 && (

        <button className='alert' onClick={handleReset}>
          <GrPowerReset /> 
        </button>
        )}
      </div>
                

      {/* Generate printout button */}
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={generateCharacter}>Generate Printout</button>
      )}
    </div>
  );
}

export default App;
