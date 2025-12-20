// --------------------
// Fantasy Name Generator
// --------------------

// Random first names
const firstNames = [/* your firstNames array as before */];

// Random last names
const lastNames = [/* your lastNames array as before */];

// Functions
function generateFullName() {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast  = lastNames[Math.floor(Math.random() * lastNames.length)];
    const output = document.getElementById("fullNameOutput");
    output.textContent = randomFirst + " " + randomLast;

    output.style.animation = 'none';
    void output.offsetWidth;
    output.style.animation = 'fadeInUp 0.5s forwards';
}

function generateMatchingLastName() {
    const firstName = document.getElementById("firstNameInput").value.trim();
    if (!firstName) {
        alert("Please enter a first name!");
        return;
    }
    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
    const output = document.getElementById("matchedLastNameOutput");
    output.textContent = firstName + " " + randomLast;

    output.style.animation = 'none';
    void output.offsetWidth;
    output.style.animation = 'fadeInUp 0.5s forwards';
}

// Attach buttons after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fullNameBtn").addEventListener("click", generateFullName);
    document.getElementById("matchLastBtn").addEventListener("click", generateMatchingLastName);
    initializeMap(); // Initialize the map
});

// --------------------
// Interactive Map
// --------------------
let map;
let markers = [];

// Example bad words list (add more as needed)
const badWords = ["badword1", "badword2", "idiot", "curseword"];

// Check for bad words in input
function containsBadWords(text) {
    const lowerText = text.toLowerCase();
    return badWords.some(word => lowerText.includes(word));
}

function initializeMap() {
    map = L.map('map').setView([51.505, -0.09], 3); // Centered globally

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Add marker on button click
    document.getElementById("addMarkerBtn").addEventListener("click", () => {
        const nameInput = document.getElementById("locationNameInput").value.trim();
        if (!nameInput) {
            alert("Please enter a location name.");
            return;
        }
        if (containsBadWords(nameInput)) {
            alert("Inappropriate words are not allowed.");
            return;
        }

        const center = map.getCenter(); // place marker at center of map
        const marker = L.marker(center).addTo(map).bindPopup(nameInput);
        markers.push(marker);

        // Clear input
        document.getElementById("locationNameInput").value = "";
    });

    // Optional: add marker on map click
    map.on('click', function(e) {
        const nameInput = document.getElementById("locationNameInput").value.trim();
        if (!nameInput) {
            alert("Please enter a location name before clicking the map.");
            return;
        }
        if (containsBadWords(nameInput)) {
            alert("Inappropriate words are not allowed.");
            return;
        }

        const marker = L.marker(e.latlng).addTo(map).bindPopup(nameInput);
        markers.push(marker);
        document.getElementById("locationNameInput").value = "";
    });
}
