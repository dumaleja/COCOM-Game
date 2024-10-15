var map = L.map('map').setView([41.8719, 12.5674], 5); // Center map on Italy

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Highlight Italy with a polygon (coordinates are simplified for example)
var polygon = L.polygon([
    [47.0920, 6.8500],
    [38.1157, 15.8893],
    [36.8662, 12.4803],
    [45.8389, 8.8217]
]).addTo(map);

var correctAnswer = "Italy"; // Set the correct answer

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById('result').innerText = "Correct! Well done.";
    } else {
        document.getElementById('result').innerText = "Incorrect. Try again!";
    }
}
