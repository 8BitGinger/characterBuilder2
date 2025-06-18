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
import humansImage from "./assets/Races/Humans.jpg";
import badgurixImage from "./assets/Races/Badgurix.jpg";
import augtensImage from "./assets/Races/Augtens.jpg";
import asuraImage from "./assets/Races/Asura.jpg";
import archsImage from "./assets/Races/Archs.jpg";
import antaleerImage from "./assets/Races/Antaleer.jpg";
import ikawImage from "./assets/Races/Ikaw.jpg";
import giraImage from "./assets/Races/Gira.jpg";
import isegunImage from "./assets/Races/Isegun.jpg";
import glowhraunImage from "./assets/Races/Glowhraun.jpg";
import teleclissImage from "./assets/Races/Telecliss.jpg";
import hwampsImage from "./assets/Races/Hwamps.jpg";
import giantsImage from "./assets/Races/Giants.jpg";
import tauravaImage from "./assets/Races/Taurava.jpg";
import warveImage from "./assets/Races/Warve.jpg";
import selvanImage from "./assets/Races/Selvan.jpg";
import namorsImage from "./assets/Races/Namors.jpg";
import elvitchImage from "./assets/Races/Elvitch Spirit Rider.jpg";
import taotumImage from "./assets/Races/Taotum.jpg";
import vulturanImage from "./assets/Races/Vulturan.jpg";
import ryderzImage from "./assets/Races/Ryderz.jpg";
import lightlingImage from "./assets/Races/Lightling.jpg";
import musculusImage from "./assets/Races/Musculus.jpg";
import gemborneImage from "./assets/Races/Gemborne.jpg";
import elvesImage from "./assets/Races/Elves.jpg";
import larveImage from "./assets/Races/Larve.jpg";
import ruetreeImage from "./assets/Races/Ruetree.jpg";
import elticImage from "./assets/Races/Eltic.jpg";
import viporianImage from "./assets/Races/Viporian.jpg";
import crimrikImage from "./assets/Races/Crimrik.jpg";
import mirrormenImage from "./assets/Races/Mirrormen.jpg";
import frollImage from "./assets/Races/Froll.jpg";
import peatonsImage from "./assets/Races/Peaton.jpg";
import roostinsImage from "./assets/Races/Roostins.jpg";
import dragonaireImage from "./assets/Races/Dragonaire.jpg";
import dwarvesImage from "./assets/Races/Dwarves.jpg";
import constructImage from "./assets/Races/Construct.jpg";
import panthariImage from "./assets/Races/Panthari.jpg";
import redhornImage from "./assets/Races/Redhorn.jpg";
import minotaurImage from "./assets/Races/Minotaur.jpg";
import laotuImage from "./assets/Races/Laoatu.jpg";
import turtanImage from "./assets/Races/Turtan.jpg";
import djinniImage from "./assets/Races/Djinni.jpg";
import foxumImage from "./assets/Races/Foxum 2.jpg";
import havginImage from "./assets/Races/Havgin.jpg";
import ramielImage from "./assets/Races/Ramiel.jpg";
import centorcImage from "./assets/Races/Centorc.jpg";
import tunklesImage from "./assets/Races/Tunkles.jpg";
import owlecImage from "./assets/Races/Owlec.jpg";
import jedanakoImage from "./assets/Races/Jedanako.jpg";
import torroImage from "./assets/Races/Torro.jpg";
import gorakImage from "./assets/Races/Gorak.jpg";
import caneisImage from "./assets/Races/Caneis.jpg";
import spelorianImage from "./assets/Races/Spelorian.jpg";
import trollImage from "./assets/Races/Troll.jpg";
import qImage from "./assets/Races/Q.jpg";
import soullessImage from "./assets/Races/Soulless.jpg";
import zarutImage from "./assets/Races/Zarut.jpg";
import otorcImage from "./assets/Races/Otorc.jpg";
import brinxImage from "./assets/Races/Brinx.jpg";
import toricImage from "./assets/Races/Toric.jpg";
import duogoblinImage from "./assets/Races/Duogoblin.jpg";
import melanniImage from "./assets/Races/Melanni.jpg";
import gonjicImage from "./assets/Races/Gonjic.jpg";
import jaddImage from "./assets/Races/Jaddehb.jpg";
import polkansImage from "./assets/Races/Polkans.jpg";
import skorcImage from "./assets/Races/Skorc.jpg";
import delvianImage from "./assets/Races/Delvian.jpg";
import tibImage from "./assets/Races/Tib.jpg";
import orcImage from "./assets/Races/Orc.jpg";
import jackalImage from "./assets/Races/Jackal.jpg";
import drowlandImage from "./assets/Races/Drowland.jpg";
import manticlusImage from "./assets/Races/Manticlus.jpg";
import denbarkImage from "./assets/Races/Denbark.jpg";
import octubianImage from "./assets/Races/Octubian.jpg";
import dawspImage from "./assets/Races/Dawsp.jpg";
import boonImage from "./assets/Races/Boon.jpg";
import trinonImage from "./assets/Races/Trinon.jpg";
import shifterImage from "./assets/Races/Shifter.jpg";
import thystImage from "./assets/Races/Thyst.jpg";
import weremanImage from "./assets/Races/wereman.jpg";
import ivotienImage from "./assets/Races/Ivotien.jpg";
import manneniteImage from "./assets/Races/Mannenite.jpg";
import oakrelsImage from "./assets/Races/Oakrels.jpg";
import felynxImage from "./assets/Races/Felynx.jpg";
import treetonImage from "./assets/Races/Treeton.jpg";
import goblinImage from "./assets/Races/goblin.jpg";
import bloodElfImage from "./assets/Races/Blood Elf.jpg";
import cuthImage from "./assets/Races/Cuth.jpg";
import magelvImage from "./assets/Races/Magelf.jpg";
import bisanuImage from "./assets/Races/Bisanu.jpg";
import potecImage from "./assets/Races/Potec.jpg";
import bandaImage from "./assets/Races/Banda.jpg";
import cabatImage from "./assets/Races/Cabat.jpg";
import cossakusImage from "./assets/Races/Cossakus.jpg";

const raceImages = {
    "Badgurix": badgurixImage,
    "Augtens": augtensImage,
    "Asura": asuraImage,
    "Archs": archsImage,
    "Antaleer": antaleerImage,
    "Ikaw": ikawImage,
    "Gira": giraImage,
    "Isegun": isegunImage,
    "Glowhraun": glowhraunImage,
    "Telecliss": teleclissImage,
    "Hwamps": hwampsImage,
    "Giants": giantsImage,
    "Taurava": tauravaImage,
    "Warve": warveImage,
    "Selvan": selvanImage,
    "Namors": namorsImage,
    "Elvitch": elvitchImage,
    "Taotum": taotumImage,
    "Vulturan": vulturanImage,
    "Ryderz": ryderzImage,
    "Lightling": lightlingImage,
    "Musculus": musculusImage,
    "Gemborne": gemborneImage,
    "Elves": elvesImage,
    "Larve": larveImage,
    "Ruetree": ruetreeImage,
    "Eltic": elticImage,
    "Viporian": viporianImage,
    "Crimrik": crimrikImage,
    "Mirrormen": mirrormenImage,
    "Froll": frollImage,
    "Peaton": peatonsImage,
    "Roostins": roostinsImage,
    "Dragonaire": dragonaireImage,
    "Dwarves": dwarvesImage,
    "Humans": humansImage,
    "Construct": constructImage,
    "Panthari": panthariImage,
    "Redhorn": redhornImage,
    "Minotaur": minotaurImage,
    "Laotu": laotuImage,
    "Turtan": turtanImage,
    "Djinni": djinniImage,
    "Foxum": foxumImage,
    "Havgin": havginImage,
    "Ramiel": ramielImage,
    "Centorc": centorcImage,
    "Tunkles": tunklesImage,
    "Denbark": denbarkImage,
    "Owlec": owlecImage,
    "Jedanako": jedanakoImage,
    "Torro": torroImage,
    "Gorak": gorakImage,
    "Caneis": caneisImage,
    "Spelorian": spelorianImage,
    "Troll": trollImage,
    "Q": qImage,
    "Soulless": soullessImage,
    "Zarut": zarutImage,
    "Otorc": otorcImage,
    "Brinx": brinxImage,
    "Toric": toricImage,
    "Duogoblin": duogoblinImage,
    "Melanni": melanniImage,
    "Gonjic": gonjicImage,
    "Jaddehb": jaddImage,
    "Polkans": polkansImage,
    "Skorc": skorcImage,
    "Delvian": delvianImage,
    "Tib": tibImage,
    "Orc": orcImage,
    "Jackal": jackalImage,
    "Drowland": drowlandImage,
    "Manticlus": manticlusImage,
    "Octubian": octubianImage,
    "Dawsp": dawspImage,
    "Boon": boonImage,
    "Trinon": trinonImage,
    "Shifter": shifterImage,
    "Thyst": thystImage,
    "Wereman": weremanImage,
    "Ivotien": ivotienImage,
    "Mannenite": manneniteImage,
    "Oakrels": oakrelsImage,
    "Felynx": felynxImage,
    "Treeton": treetonImage,
    "Goblin": goblinImage,
    "Blood Elf": bloodElfImage,
    "Cuth": cuthImage,
    "Magelv": magelvImage,
    "Bisanu": bisanuImage,
    "Potec": potecImage,
    "Banda": bandaImage,
    "Cabat": cabatImage,
    "Cossakus": cossakusImage,
}// Assuming you have a raceImages.js file with the images


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
