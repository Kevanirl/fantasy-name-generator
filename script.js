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
    initializeMap(); // Initialize the interactive Agon map
});

// --------------------
// Interactive Agon Map
// --------------------
const mapContainer = document.getElementById('map-container');
const mapImage = document.getElementById('map-image');
const markers = [];

// Example bad words list
const badWords = ["badword1", "badword2", "idiot", "curseword"];

// Check for bad words in input
function containsBadWords(text) {
    const lowerText = text.toLowerCase();
    return badWords.some(word => lowerText.includes(word));
}

function initializeMap() {
    // Click event to place marker
    mapImage.addEventListener('click', function(e) {
        const rect = mapImage.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        let markerName = prompt('Enter marker name:');
        if (!markerName) return;

        if (containsBadWords(markerName)) {
            alert('Marker name contains inappropriate words. Please try again.');
            return;
        }

        const marker = document.createElement('div');
        marker.className = 'marker';
        marker.style.left = x + 'px';
        marker.style.top = y + 'px';
        marker.textContent = markerName;
        mapContainer.appendChild(marker);
        markers.push(marker);
    });
}

