import React, { useState, useEffect } from 'react';
import './App.css';


// Import questions and mappings for character generation
import questions from './utilities/questions'; 
import raceData from './utilities/racedata';
import originData from './utilities/origindata';

// Import assets
import logo from './assets/memoria.png';
import { GrPowerReset } from "react-icons/gr";
import { VscDebugStart } from "react-icons/vsc";


//import race pictures
import raceImages from './utilities/raceImages'; // Assuming you have a raceImages.js file with the images


function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionIndex];
  const [loading, setLoading] = useState(true);


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
    setLoading(true);
  }

  const handleLoading = () => {
    setLoading(false);
  }

  // Generate character based on answers
  

  const generateCharacter = () => {
    const race = raceData[answers[2]] ? raceData[answers[2]] : {}; // Get race data, default to {}
    const origin = originData[answers[4]] ? originData[answers[4]] : {}; // Get origin data, default to {}
    const randomHP = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // HP between 5 and 20
    const raceImage = raceImages[answers[2]] || null; // Default image if not found}

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
      gender: answers[6],
      origin: answers[4],
      originDescription: origin.originDescription || "N/A",
      levelAbility: origin.levelAbility || "N/A",
      startingPackage: origin.startingPackage || "N/A",
      weaponProficiency: origin.weaponProficiency || "N/A",
      focus: answers[5],
      hp: randomHP,
      logo: raceImage,
    };
  
  
    alert('Generating Character......click ok to Print!');
    generatePrintout(character);
    console.log('Character:', character);
  };

 
// Generate printout of character build
  // This function creates a printout of the character build based on the answers provided by the user.

  const generatePrintout = (character) => {

  
    const characterDetails = `
    
        <ul class="character-details">

            <li><strong>Name:</strong> ${character?.name || "N/A"}</li>
            <li><strong>Gender:</strong> ${character?.gender || "N/A"}</li>
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

            <li><strong>Focus:</strong> ${character?.focus || "N/A"}</li>
    
            <li><strong>HP:</strong> ${character?.hp || "N/A"}</li>
            <li><strong>Movement:</strong> Land – 5, Air – 7, and Water – 2</li>
            <li><strong>Stats:</strong> 15 points to assign as you see fit (Average human has a 2 in each category).  Don't forget to add any Racial bonus, Racial negative, and potential bonus based on Origin/Level </li>
            <ol>
              <li>Strength – Added to Melee damage</li>
              <li>Reflex – Added to Ranged damage</li>
              <li>Fortitude – Damage Reduction / Mind Altering Effects</li>
              <li>Intelligence – Added to Magic/Focus damage</li>
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
          body { font-family: "MedievalSharp", cursive, serif; font-size: 16px; background: linear-gradient(90deg,rgb(134, 167, 206) 0%, rgb(129, 129, 129) 100%);} /* Added fallback */
          h2 { text-align: center; text-decoration: underline; font-family: "Bellefair", serif; font-size: 26px;  }
          div { display: flex; justify-content: center; align-items: center; flex-direction: row; margin: auto; }
          .character-details, .race-breakdown, .origin-breakdown, .final-details { list-style-type: none; }
          .logo { width: 300px; height: auto; display: block; margin: 0 auto; border-radius: 10px; }
          .logo2 { width: 200px; height: auto; margin: auto; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); border-radius: 50%; border: 2px solid rgba(0, 0, 0, 0.5); }
          ol { font-size: 14px; }
          aside {margin: auto;}
          </style>
            </head>
            <body>
            <div>
                <aside><img class="logo" src=${logo} alt="Memoria Logo" />
                                <h2>⚔ Character Build Cheatsheet ⚔</h2>

                                </aside>
                                ${character.logo ? `<img class="logo2" src="${character.logo}" alt="${character?.race} Image">` : ''}

                                </div>
            
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
    <>
    <div className='container'>
    <div className="boxShadow">
     

      {/* Display current question */}
      {loading ? 
          <div className='loading'>
             <img className="logo" src={logo} alt="Memoria Logo" />
         
          <button className='start' onClick={handleLoading}><VscDebugStart />

          </button>
          </div>
          : 
          <>
      <h2>{currentQuestion.question}</h2>

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


      {/* Navigation buttons */}
      <div>
        {currentQuestionIndex > 0 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {currentQuestionIndex < questions.length - 1 && (
          <button onClick={handleNext}>Next</button>
        )}
                {currentQuestionIndex > -1 && (

        <button className='alert' onClick={handleReset}>
          <GrPowerReset /> 
        </button>
        )}
      </div>
                

      {/* Generate printout button */}
      {currentQuestionIndex === questions.length - 1 && (
        <button className='success' onClick={generateCharacter}>Generate Printout</button>
      )}
      </>
    }
      </div>
    </div>
    <aside>
      <h2>Arc Protector Generator</h2>
    </aside>
    </>
  );
}

export default App;
