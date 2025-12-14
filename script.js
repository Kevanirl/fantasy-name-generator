// Random first names inspired by WoW style
const firstNames = [
    "Elunaria","Stormwarden","Gorgrim","Thalorien","Sylvalis",
    "Zulgar","Lyraen","Valdrek","Morrath","Eldaeris","Ser"
];

// Fantasy style last names
const lastNames = [
    "Ironfist","Dawnblade","Shadowmere","Stormcaller","Bloodforge",
    "Windwhisper","Nightshade","Starwatcher","Frostweaver","Shadowhunter"
];

function generateFullName() {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast  = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = randomFirst + " " + randomLast;
    document.getElementById("fullNameOutput").textContent = fullName;
}

function generateMatchingLastName() {
    const firstName = document.getElementById("firstNameInput").value.trim();
    if (firstName === "") {
        alert("Please enter a first name!");
        return;
    }

    const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

    const matchedName = firstName + " " + randomLast;
    document.getElementById("matchedLastNameOutput").textContent = matchedName;
}
