
     const countries = new Set([
      "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Antarctica", "Argentina", "Armenia",
      "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
      "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
      "Burkina Faso", "Burundi", "Cape Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
      "Chile", "People's Republic of China", "Colombia", "Comoros", "Democratic Republic of the Congo", "Republic of the Congo", "Costa Rica", "Croatia",
      "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
      "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
      "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala",
      "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
      "Iraq", "Ireland", "Israel", "Italy", "Côte d'Ivoire", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
      "Kiribati", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
      "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
      "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Federated States of Micronesia", "Moldova",
      "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
      "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
      "Palau", "Palestine","Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
      "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
      "Samoa", "San Marino", "São Tomé and Príncipe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
      "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain",
      "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania",
      "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Türkiye", "Turkmenistan", "Tuvalu", "Uganda",
      "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
      "Vatican City", "Venezuela", "Vietnam", "Western Sahara","Yemen", "Zambia", "Zimbabwe"
    ]);

    const combatantCommands = {
      northcom: new Set([
    "Canada", "Mexico", "United States of America"
  ]),

  southcom: new Set([
    "Antigua and Barbuda", "Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Chile", "Colombia",
    "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "Ecuador", "El Salvador", "Grenada", "Guatemala", "Guyana",
    "Haiti", "Honduras", "Jamaica", "Nicaragua", "Panama", "Paraguay", "Peru", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Suriname", "Trinidad and Tobago", "Uruguay", "Venezuela"
  ]),

  eucom: new Set([
    "Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus", "Belgium", "Bosnia and Herzegovina",
    "Bulgaria", "Croatia", "Cyprus", "Czechia", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany",
    "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo", "Latvia", "Liechtenstein", "Lithuania", "Luxembourg",
    "Malta", "Moldova", "Monaco", "Montenegro", "Netherlands", "North Macedonia", "Norway", "Poland", "Portugal",
    "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Türkiye",
    "Ukraine", "United Kingdom", "Vatican City"
  ]),

  africom: new Set([
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon", "Cape Verde", "Central African Republic",
    "Chad", "Comoros", "Côte d'Ivoire", "Democratic Republic of the Congo", "Djibouti", "Equatorial Guinea", "Eritrea",
    "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya",
    "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria",
    "Republic of the Congo", "Rwanda", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan",
    "Sudan", "São Tomé and Príncipe", "Tanzania", "Togo", "Tunisia", "Uganda", "Western Sahara", "Zambia", "Zimbabwe"
  ]),

  centcom: new Set([
    "Afghanistan", "Bahrain", "Egypt", "Iran", "Iraq", "Israel", "Jordan", "Kazakhstan", "Kuwait", "Kyrgyzstan", "Lebanon",
    "Oman", "Pakistan", "Palestine", "Qatar", "Saudi Arabia", "Syria", "Tajikistan", "Turkmenistan",
    "United Arab Emirates", "Uzbekistan", "Yemen"
  ]),

  indopacom: new Set([
    "Antarctica","Australia", "Bangladesh", "Bhutan", "Brunei", "Cambodia", "East Timor" ,"Federated States of Micronesia", "Fiji", "India", "Indonesia",
    "Japan", "Kiribati", "Laos", "Malaysia", "Maldives", "Marshall Islands", "Mongolia", "Myanmar", "Nauru", "Nepal",
    "New Zealand", "North Korea", "Palau", "Papua New Guinea","People's Republic of China", "Philippines", "Samoa", "Singapore", "Solomon Islands",
    "South Korea", "Sri Lanka", "Taiwan", "Thailand", "Tonga", "Tuvalu", "Vanuatu", "Vietnam"
  ])
};
function initializeCommandTables() {
  for (const [command, countries] of Object.entries(combatantCommands)) {
    const container = document.getElementById(command);
    const sorted = [...countries].sort();
    sorted.forEach(name => {
      const div = document.createElement("div");
      div.className = "country";
      div.dataset.country = name; // store name for reference
      container.appendChild(div);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  initializeCommandTables();
});

    const nameAliases = {
    "antigua": "Antigua and Barbuda",
    "bosnia": "Bosnia and Herzegovina",
    "burma": "Myanmar",
    "cabo verde": "Cape Verde",
    "car": "Central African Republic",
    "china": "People's Republic of China",
    "congo": "Democratic Republic of the Congo",
    "Congo-Kinshasa":"Democratic Republic of the Congo",
    "cote d'ivoire": "Côte d'Ivoire",
    "cote divoire": "Côte d'Ivoire",
    "czech republic": "Czechia",
    "dominica rep": "Dominican Republic",
    "dprk": "North Korea",
    "dr": "Dominican Republic",
    "dr congo": "Democratic Republic of the Congo",
    "drc": "Democratic Republic of the Congo",
    "emirates": "United Arab Emirates",
    "gb": "United Kingdom",
    "guinea bissau": "Guinea-Bissau",
    "iran": "Iran",
    "ivory coast": "Côte d'Ivoire",
    "the ivory coast": "Côte d'Ivoire",
    "ksa": "Saudi Arabia",
    "lao": "Laos",
    "macedonia": "North Macedonia",
    "micronesia": "Federated States of Micronesia",
    "aotearoa": "New Zealand",
    "prc": "People's Republic of China",
    "roc": "Republic of the Congo",
    "rok": "South Korea",
    "russian federation": "Russia",
    "sao tome": "São Tomé and Príncipe",
    "sao tome & principe": "São Tomé and Príncipe",
    "sao tome and principe": "São Tomé and Príncipe",
    "saudi": "Saudi Arabia",
    "south korea": "South Korea",
    "saint kitts": "Saint Kitts and Nevis",
    "saint kitts & nevis" : "Saint Kitts and Nevis",
    "st kitts": "Saint Kitts and Nevis",
    "st. kitts": "Saint Kitts and Nevis",
    "st lucia": "Saint Lucia",
    "st. lucia": "Saint Lucia",
    "saint vincent": "Saint Vincent and the Grenadines",
    "saint vincent & the grenadines": "Saint Vincent and the Grenadines",
    "st vincent": "Saint Vincent and the Grenadines",
    "st vincent & the grenadines": "Saint Vincent and the Grenadines",
    "st. vincent": "Saint Vincent and the Grenadines",
    "st. vincent & the grenadines": "Saint Vincent and the Grenadines",
    "swaziland": "Eswatini",
    "timor leste": "East Timor",
    "timor-leste": "East Timor",
    "trinidad": "Trinidad and Tobago",
    "trinidad & tobago": "Trinidad and Tobago",
    "turkiye": "Türkiye",
    "turkey": "Türkiye",
    "uae": "United Arab Emirates",
    "the emirates": "United Arab Emirates",
    "uk": "United Kingdom",
    "u.k.": "United Kingdom",
    "the uk" : "United Kingdom",
    "the u.k." : "United Kingdom",
    "u.s.": "United States of America",
    "u.s.a.": "United States of America",
    "united states": "United States of America",
    "united states of america": "United States of America",
    "us": "United States of America",
    "usa": "United States of America",
    "vatican": "Vatican City",
    "viet nam": "Vietnam",

};

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mapContainer").classList.add("grayed");
  document.getElementById("countryInput").disabled = true;
  document.getElementById("countryInput").placeholder = "Click 'Begin' to start";
  document.getElementById("timeLeft").textContent = "10:00";
});


  // 1. Initialize variables
const found = new Set();
const input = document.getElementById("countryInput");
const scoreDisplay = document.getElementById("score");
   
const gccGuessedCountries = {
  northcom: [],
  southcom: [],
  eucom: [],
  africom: [],
  centcom: [],
  indopacom: []
};

  // 2. Define functions (in any order after variables are declared)

function highlightCountryByDataCountry(inputName) {
  const normalized = inputName.trim().toLowerCase();

  // Search for all elements with a country-data attribute
  const elements = document.querySelectorAll("[country-data]");

  elements.forEach(el => {
    const countryName = el.getAttribute("country-data").trim().toLowerCase();

    if (countryName === normalized) {
      // If it's a group, highlight its children
      if (el.tagName.toLowerCase() === "g") {
        el.classList.add("found");
        const children = el.querySelectorAll("path, circle, use");
        children.forEach(child => child.classList.add("found"));
      } else {
        // Single element (path, circle, etc.)
        el.classList.add("found");
      }
    }
  });
}


function updateCommandList(countryName) {
  for (const [command, countrySet] of Object.entries(combatantCommands)) {
    if (countrySet.has(countryName)) {
      const container = document.getElementById(command);
      const boxes = container.querySelectorAll(".country");
      boxes.forEach(box => {
        if (box.dataset.country === countryName) {
        box.classList.add("found");
        box.textContent = countryName;
}
      });
      break;
    }
  }
}

giveUpButton.addEventListener("click", () => {
  if (!gameStarted) return;
  
  clearInterval(countdown);  // Stop the timer

  endGame();                 // Reveal all missed countries
  showGiveUpModal(); // display the give up modal
});

function updateScore() {
  scoreDisplay.textContent = `${found.size} / ${countries.size} countries`;

  if (found.size === countries.size) {
    clearInterval(countdown); // ✅ stop timer
    showVictoryModal();       // ✅ trigger modal
  }
}

function formatElapsedTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}


if (found.size === countries.size) {
  clearInterval(countdown);           // 🛑 Stop the timer
  showVictoryModal(); // 🎉 show the gif and message
  }

function endGame() {
  revealMissedCountries();
}



// 3. Input event listener
input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      const raw = input.value.trim().toLowerCase();
      const canonical = nameAliases[raw] || raw;
      const normalized = canonical.toLowerCase();

      for (const name of countries) {
        if (name.toLowerCase() === normalized && !found.has(name)) {
          found.add(name);
          highlightCountryByDataCountry(name);
          updateCommandList(name);
          updateScore();
          break;
        }
        input.value = ""; //clears box if right//
      }
      input.value = ""; //clears box if wrong//
    }
  });
  
  function revealMissedCountries() {
  for (const [cocom, countrySet] of Object.entries(combatantCommands)) {
    const container = document.getElementById(cocom);

    countrySet.forEach(countryName => {
      if (!found.has(countryName)) {
        const box = container.querySelector(`.country[data-country="${countryName}"]`);


        if (box) {
          box.textContent = countryName;
          box.style.backgroundColor = "red";
          box.style.color = "white";
          box.style.fontWeight = "bold"; // ✅ Make text bold
          box.classList.add("missed");
        }

        // Also color the SVG element (if it exists)
        const svgEl = document.querySelector(`[country-data="${countryName}"]`);
        if (svgEl) {
          if (svgEl.tagName.toLowerCase() === "g") {
            svgEl.querySelectorAll("path, circle").forEach(child => {
              child.style.fill = "rgba(255, 0, 0, 0.5)";
            });
          } else {
            svgEl.style.fill = "rgba(255, 0, 0, 0.5)";
          }
        }
      }
    });
  }

  // Disable input and show a message
  input.disabled = true;
  input.placeholder = "Time's up!";
}

// 4. Timer logic
let countdown; // declared globally to access in restart/giveUp

function startTimer() {
  const timerDisplay = document.getElementById("timeLeft");
 
  countdown = setInterval(() => {
  timeRemaining--;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById("timeLeft").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  if (timeRemaining <= 0 || found.size === countries.size) {
  clearInterval(countdown);
  endGame();
}
}, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  document.getElementById("timeLeft").textContent =
    `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById("whatamimissingButton").addEventListener("click", () => {
  const remainingCountries = Array.from(document.querySelectorAll(".country"))
    .filter(div => !div.classList.contains("found"))
    .map(div => div.getAttribute('country-data')?.toLowerCase());

  // ONLY look inside the <svg> to avoid grid boxes
  const svg = document.querySelector("svg");
  const svgElements = svg.querySelectorAll("g[country-data], path[country-data], circle[country-data]");

  svgElements.forEach(el => {
    const countryName = el.dataset.country?.toLowerCase();
    if (remainingCountries.includes(countryName)) {
      if (el.tagName.toLowerCase() === "g") {
        el.querySelectorAll("path, circle").forEach(child => {
          child.classList.add("flash-missed");
        });
      } else {
        el.classList.add("flash-missed");
      }
    }
  });

  // Remove flash after 2 seconds
  setTimeout(() => {
    document.querySelectorAll(".flash-missed").forEach(el => el.classList.remove("flash-missed"));
  }, 1000);
});

let gameStarted = false;
let timerInterval;

//Begin Button//

beginButton.addEventListener("click", () => {
  if (gameStarted) return;
  gameStarted = true;

// Un-dim the map
  document.getElementById("mapContainer").classList.remove("grayed");

// Enable input
  const input = document.getElementById("countryInput");
  input.disabled = false;
  input.placeholder = "Type country name here";

// Start timer
  timeRemaining = 600;
  const minutes = Math.floor(timeRemaining / 60);
const seconds = timeRemaining % 60;
    document.getElementById("timeLeft").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;  countdown = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();
    if (timeRemaining <= 0) {
      clearInterval(countdown);
      endGame();
      showTimeoutModal(); // ✅ show modal on timeout}
    }
  }, 1000);
});


window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("mapContainer").classList.add("grayed");
  document.getElementById("countryInput").disabled = true;
  document.getElementById("countryInput").placeholder = "Click 'Begin' to start";
});


 // RESTART BUTTON REFRESHES WHOLE PAGE //
document.getElementById("restartButton").addEventListener("click", () => {
  location.reload(); // refreshes the page and resets everything
});

//Mr. Miyagi Win!//
function showVictoryModal() {
const elapsedSeconds = 600 - timeRemaining;
const minutes = Math.floor(elapsedSeconds / 60);
const seconds = elapsedSeconds % 60;

document.getElementById("completionTimeText").innerHTML = 
  `You completed it in <strong>${minutes}:${seconds.toString().padStart(2, '0')}</strong>.`;

document.getElementById("victoryModal").style.display = "block";

const modal = document.getElementById("victoryModal").style.display = "block"; // or whatever your modal ID is
}

function closeVictoryModal() {
  document.getElementById("victoryModal").style.display = "none";
}

function showTimeoutModal() {
  document.getElementById("timeoutModal").style.display = "block";
}

function closeTimeoutModal() {
  document.getElementById("timeoutModal").style.display = "none";
}

function showGiveUpModal() {
  document.getElementById("giveUpModal").style.display = "block";
}

function closeGiveUpModal() {
  document.getElementById("giveUpModal").style.display = "none";
}

function closevictoryModal() {
  document.getElementById("victoryModal").style.display = "none";
}

function formatElapsedTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}


document.getElementById("giveUpButton").addEventListener("click", () => {
  if (!gameStarted) return; // Prevent giving up if game hasn't started
  revealMissedCountries();
  showGiveUpModal();
  clearInterval(countdown);
});

function simulateWin() {
  if (!gameStarted) {
    gameStarted = true;
    timeRemaining = 600;
    startTimer();
  }

  // Simulate full completion
  countries.forEach(c => found.add(c)); // If you want the map filled
  updateScore(); // this will call showVictoryModal()
}
