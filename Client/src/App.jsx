import React, { useState, useEffect } from 'react';
import './App.css';


// Import questions and mappings for character generation
import questions from './utilities/questions'; 
import raceData from './utilities/racedata';
import originData from './utilities/origindata';

// Import assets
import logo from './assets/memoria.png';
import { GrPowerReset } from "react-icons/gr";

//import race pictures
import Telecliss from "./assets/Races/Telecliss.jpg";
import Cabat from "./assets/Races/Cabat.jpg";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];

  const [logoPic, setLogoPic] = useState(Telecliss);
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
    const race = raceData[answers[2]] ? raceData[answers[2]] : {}; // Get race data, default to {}
    const origin = originData[answers[4]] ? originData[answers[4]] : {}; // Get origin data, default to {}
    const randomHP = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // HP between 5 and 20
  
    const character = {
      name: answers[1],
      race: answers[2],
      raceDescription: race.raceDescription || "N/A",  // Get descriptions, etc.
      racialBonus: race.racialBonus || "N/A",
      racialAbility: race.racialAbility || "N/A",
      racialNegative: race.racialNegative || "N/A",
      hpBonus: race.hpBonus || "N/A",
      attackProwess: race.attackProwess || "N/A",
      defenseProwess: race.defenseProwess || "N/A",
      startingJinx: race.startingJinx || "N/A",
      startingLevel: race.startingLevel || "N/A",
      age: answers[3],
      origin: answers[4],
      originDescription: origin.originDescription || "N/A",
      levelAbility: origin.levelAbility || "N/A",
      startingPackage: origin.startingPackage || "N/A",
      weaponProficiency: origin.weaponProficiency || "N/A",
      focus: answers[5],
      goal: answers[6],
      flaw: answers[7],
      strength: answers[8],
      hp: randomHP,
      logo: answers[2],
    };
  
    setCharacter(character);
    setLogoPic(answers[2]) // Store the character object in state
  
    alert('Generating Character......click ok to Print!');
    generatePrintout(character);
    console.log('Character:', character);
  };

 
// Generate printout of character build
  // This function creates a printout of the character build based on the answers provided by the user.

  const generatePrintout = (character) => {
    const printoutContent = Object.entries(answers).map(
      ([questionId, answer]) => {
        const questionObj = questions.find((q) => q.id === parseInt(questionId));
        const question = questionObj ? questionObj.question : "Unknown Question";
  
        return `
          <div className='questionAnswer' key="${questionId}">
            <p>
              <strong>${question}:</strong> ${answer}
            </p>
          </div>
        `;
      }
    );
  
    const characterDetails = `
    
        <ul class="character-details">
        <div>
        <img class="logo" src=${logoPic} alt="Race Logo" />
        <ul>
            <li><strong>Name:</strong> ${character?.name || "N/A"}</li>
            <li><strong>Race:</strong> ${character?.race || "N/A"}</li>
            <li><strong>Race Description:</strong> ${character?.raceDescription || "N/A"}</li>
            <li><strong>Racial Bonus:</strong> ${character?.racialBonus || "N/A"}</li>
            <li><strong>Racial Ability:</strong> ${character?.racialAbility || "N/A"}</li>
            <li><strong>Racial Negative:</strong> ${character?.racialNegative || "N/A"}</li>
            <li><strong>Starting Jinx:</strong> ${character?.startingJinx || "N/A"}</li>
            <li><strong>Starting Origin Level:</strong> ${character?.startingLevel || "N/A"}</li>
            <li><strong>HP Bonus:</strong> ${character?.hpBonus || "N/A"}</li>
            <li><strong>Attack Prowess:</strong> ${character?.attackProwess || "N/A"}</li>
            <li><strong>Defense Prowess:</strong> ${character?.defenseProwess || "N/A"}</li>
            <li><strong>Age:</strong> ${character?.age || "N/A"}</li>
            <li><strong>Origin:</strong> ${character?.origin || "N/A"}</li>
            <li><strong>Origin Description:</strong> ${character?.originDescription || "N/A"}</li>
            <li><strong>Origin Level 1 Bonus:</strong> ${character?.levelAbility || "N/A"}</li>
            <li><strong>Starting Package:</strong> ${character?.startingPackage || "N/A"}</li>
            <li><strong>Weapon Proficiency:</strong> ${character?.weaponProficiency || "N/A"}</li>
            </ul>
            </div>
            <li><strong>Focus:</strong> ${character?.focus || "N/A"}</li>
            <li><strong>Goal:</strong> ${character?.goal || "N/A"}</li>
            <li><strong>Flaw:</strong> ${character?.flaw || "N/A"}</li>
            <li><strong>Strength:</strong> ${character?.strength || "N/A"}</li>
            <li><strong>HP:</strong> ${character?.hp || "N/A"}</li>
            <li><strong>Movement:</strong> Land – 5, Air – 7, and Water – 2</li>
            <li><strong>Stats:</strong> 15 points to assign as you see fit (Average human has a 2 in each category).  Don't forget to add any Racial bonus, Racial negative, and potential bonus based on Origin/Level </li>
            <ol>
              <li>Strength – Added to Melee damage</li>
              <li>Reflex – Added to Ranged damage</li>
              <li>Fortitude – Damage Reduction / Mind Altering Effects</li>
              <li>Intelligence – Added to Magic damage</li>
              <li>Charisma – Bonus to all diplomacy, luck, and seduce checks (Percentiles)</li>
            </ol>
          </ul>
        `;
  
    const printElement = document.createElement('div');
    printElement.innerHTML = `
        <html>
        <title>Memoria Character Builder</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Bellefair&family=MedievalSharp&display=swap" rel="stylesheet">
        <style>
          /* Add your print styles here */
          body { font-family: "MedievalSharp", cursive, serif; } /* Added fallback */
          h2 { text-align: center; }
          div { display: flex; justify-content: center; align-items: center; flex-direction: row; }
          .character-details, .race-breakdown, .origin-breakdown, .final-details { list-style-type: none; }
          .logo { width: 300px; height: auto; display: block; margin: 0 auto; }
          .questionAnswer { margin-bottom: 10px; }
        </style>
            </head>
            <body>
                <img class="logo" src=${logo} alt="Memoria Logo" />
                <h2>⚔ Character Build Cheatsheet ⚔</h2>
                
                ${characterDetails}
                
            </body>
        </html>
    `;
  
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printElement.innerHTML);
    printWindow.document.close();
    printWindow.focus();
  
    setTimeout(() => {
        printWindow.print();
    }, 500);
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
