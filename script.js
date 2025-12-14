// Random first names inspired by WoW/fantasy style
const firstNames = [
    "Elunaria","Stormwarden","Gorgrim","Thalorien","Sylvalis",
    "Zulgar","Lyraen","Valdrek","Morrath","Eldaeris","Ser","Aeliana",
    "Balthor","Caelith","Daeryn","Elowen","Faelar","Gorath","Haleth",
    "Isolde","Jareth","Kael","Lyra","Maelis","Nymeria","Orin","Peregrin",
    "Quenara","Rhiannon","Sylas","Thalor","Ulric","Vaelin","Wynter",
    "Xandor","Ysolde","Zerath"
];

// Fantasy style last names
const lastNames = [
    "Ironfist","Dawnblade","Shadowmere","Stormcaller","Bloodforge",
    "Windwhisper","Nightshade","Starwatcher","Frostweaver","Shadowhunter",
    "Amberfall","Brightwood","Cinderbane","Duskbringer","Ebonhart","Frostveil",
    "Glimmerforge","Hawkridge","Ironbane","Jadeeye","Korrath","Lunaris",
    "Moonshadow","Nightbreeze","Oakenheart","Pyrelight","Quickwater","Ravencrest",
    "Stormrider","Thornfield","Umbermoor","Valewind","Wintermere","Xyrath",
    "Yarrowind","Zephyros"
];

// Generate a completely random full name
function generateFullName() {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast  = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = randomFirst + " " + randomLast;
    document.getElementById("fullNameOutput").textContent = fullName;
}

// Generate a last name to match a user-provided first name
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
