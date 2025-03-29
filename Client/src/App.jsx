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
          <p> <strong>${character.name}</strong> is a ${character.age} year old member of the <strong>${character.race}</strong> race. </p>
          <p> With the <strong>${character.origin} Origin</strong> and the chosen <strong> Focus of ${character.focus}</strong> you have the potential to be a migthy hero. </p>
          <p> ${character.name} has a goal of ${character.goal} and a character flaw of ${character.flaw}, but has the character strength of ${character.strength} to balance it out. </p>    
    `;

    const raceBreakdown = `

      <ul>
        <li>Racial Bonus:_______ </li>
        <li>Racial Ability:_______ </li>
        <li>Racial Negative:_______ </li>
        <li>Level Adjustment:_______ </li>
        <li>HP Bonus:_______ </li>
        <li>Starting Jinx:_______ </li>
        <li>Attack Prowress:_______ </li>
        <li>Defense Prowress:_______ </li>
      </ul>
    `

    const originBreakdown = `

      <ul>
        <li>Starting Package: ______________________________</li>
        <li>Weapon Proficiency: ____________________________</li>
      </ul>
    `

    const focusBreakdown = `
      <p>Start by Picking 2 Powers. You can choose any power you meet the prerequisites under the
      Focus of your choice.</p>
    `

    const finalDetails = `
      
      <ul>
        <li><strong>HP:</strong>_______ Based off of D20 plus applicable Racial Bonus</li>
        <li><strong>Movement:</strong> Land – 5, Air – 7, and Water – 2</li>
        <li><strong>Stats:</strong> 15 points to assign as you see fit</li>
        (Average human has a 2 in each category) 
          <ol>
            <li>Strength – Added to Melee damage </li>
            <li>Reflex – Added to Ranged damage</li>
            <li>Fortitude – Damage Reduction / Mind Altering Effects</li>
            <li>Intelligence – Added to Magic damage </li>
            <li>Charisma – Bonus to all diplomacy, luck, and seduce checks (Percentiles) </li>
            </ol>
            </ul>
      `




    const printElement = document.createElement('div');
    printElement.innerHTML = `
      <html>
        <head>
          <title>Memoria Character Builder</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bellefair&family=MedievalSharp&display=swap" rel="stylesheet">
          <style>
            /* Add your print styles here */
            body { font-family: MedievalSharp, cursive;
            }
            h1 { color: #f4f4f4; }
            h2 { text-align: center; }
            img { width: 300px; height: auto; display: block; margin: 0 auto; }
            li { font-size: 14px;}
            div { display: flex; flex-direction: row align-items: center; }
            .container { padding: 20px; }
            /* ... other styles ... */
          </style>
        </head>
        <body>
          <img className="logo" src=${logo} alt="Memoria Logo" />
          <h2>⚔ Character Build Cheatsheet ⚔</h2>
          ${characterDetails}

          <strong>Race and Origin</strong>
         <div>
          ${raceBreakdown}
          ${originBreakdown}
          </div>

          <strong>Focus Power</strong>
          ${focusBreakdown}

          <strong>HP, Movement, and Stats</strong>
          ${finalDetails}

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
