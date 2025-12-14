// Random first names
const firstNames = [
    "Elunaria","Stormwarden","Gorgrim","Thalorien","Sylvalis",
    "Zulgar","Lyraen","Valdrek","Morrath","Eldaeris","Ser","Aeliana",
    "Balthor","Caelith","Daeryn","Elowen","Faelar","Gorath","Haleth",
    "Isolde","Jareth","Kael","Lyra","Maelis","Nymeria","Orin","Peregrin",
    "Quenara","Rhiannon","Sylas","Thalor","Ulric","Vaelin","Wynter",
    "Xandor","Ysolde","Zerath","Aine", "Bran", "Cian", "Dara", "Eira", "Fionn", "Grainne",
    "Kael", "Lir", "Maeve", "Niamh", "Orla", "Ronan",
    "Siobhan", "Taran", "Vevina", "Wynne", "Yseult", "Zaira","Aranel", "Thalion", "Eldarion", "Faramir",
    "Elrohir", "Arwen", "Celeborn", "Finrod", "Gildor", "Haldir",
    "Isildur", "Luthien", "Maedhros", "Nimrodel", "Oropher", "Peregrin",
    "Quendolin", "Rohan", "Silmarien", "Tauriel", "Ulmo", "Voronwe", "Yavanna","Darrow", "Eo", "Mustang", "Sevro", "Cassius", "Roque",
    "Pax", "Lysander", "Victra", "Rhonna", "Ephraim",
    "Lyria", "Fitchner", "Antonia", "Titus", "Quinn", "Apollo",
    "Atlas", "Electra", "Narol", "Dancer", "Harmony", "Mickey",
    "Octavia", "Adrius", "Tiberius", "Aja", "Ragnar","Fennec",
    "Jyn", "Cassian","Aeron", "Branwen", "Cai", "Dafydd", "Eira", "Ffion", "Gwydion",
    "Heulwen", "Idris", "Lleu", "Mabon", "Nerys", "Owain", "Rhiannon",
    "Seren", "Taliesin", "Tegan", "Urien", "Ysbail", "Elen", "Maelon", "Cú Chulainn", "Fionn", "Lugh", "Brigid",
    "Deirdre", "Medb", "Conn", "Nuada", "Morrigan", "Bres",
    "Ériu", "Dagda", "Étaín", "Macha", "Cernunnos", "Ailill",
    "Éogan", "Cliodhna", "Jon", "Tyrion", "Arya", "Sansa", "Bran", "Cersei",
    "The Idiot", "Robb", "Jorah", "Theon",
    "Gendry", "Brienne", "Sandor", "Davos", "Eddard", "Petyr",
    "Melisandre", "Ygritte", "Oberyn", "Rhaegar", "Asha", "Aelar", "Eldrin", "Faelar", "Therion", "Sylvaris", "Lorien", "Arannis", "Erevan",
    "Mythrandir","Caelthas","Ithilion","Vaelis","Rynar","Elion","Thamior","Aeris","Lioren","Sylrin","Vaelin","Ithryn","Caeris",
    "Elthir","Nerith","Thyren","Saeris","Mythil","Faelis","Rilith","Eryndor","Quendolin", "Brevik",
    "Calithra",
    "Corvath",
    "Dravena",
    "Drovak",
    "Elvynna",
    "Harkan",
    "Jorvath",
    "Kaelith",
    "Kaelric",
    "Lysera",
    "Maldrin",
    "Morwen",
    "Nysera",
    "Soryn",
    "Sorielle",
    "Thalira",
    "Tharion",
    "Valmir",
    "Veyra"
];

// Random last names
const lastNames = [
    "Ironfist","Dawnblade","Shadowmere","Stormcaller","Bloodforge",
    "Windwhisper","Nightshade","Starwatcher","Frostweaver","Shadowhunter",
    "Amberfall","Brightwood","Cinderbane","Duskbringer","Ebonhart","Frostveil",
    "Glimmerforge","Hawkridge","Ironbane","Jadeeye","Korrath","Lunaris",
    "Moonshadow","Nightbreeze","Oakenheart","Pyrelight","Quickwater","Ravencrest",
    "Stormrider","Thornfield","Umbermoor","Valewind","Wintermere","Xyrath",
    "Yarrowind","Zephyros","Evenstar","Lightbringer","Stormwind","Oakenshield","Silverleaf",
    "Ironfoot","Shadowfax","Windrunner","Moonwhisper","Starfire",
    "Dawntracker","Nightbreeze","Frosthelm","Goldenbranch","Stonehelm",
    "Brightblade","Swiftarrow","Sunshadow","Mistwalker","Darkwater",
    "au Andromedus","au Augustus","au Barca","au Bellona",
    "au Lune","au Telemanus","au Trachus","au Faran",
    "au Valii-Rath","au Raa","of Lagalos","of Lykos",
    "ti Horn","ti Nakamura","Forgotten","ap Rhys","ferch Gwilym","Dafyddson","Llywelyn","ab Owain",
    "ap Gruffydd","Penrose","Gwynedd","Trevelyan","ap Hywel",
    "ap Cadwaladr","of Dyfed","of Powys","ab Morgan","ap Tudor",
    "Penbryn","of Caerleon","ap Meurig","ap Llewelyn","af Angharad","Tír na nÓg","Arryn","Tully","Bolton","Mormont","Clegane",
    "Hightower","Seaworth","Reed","Baelish","Blackfyre","Dayne",
    "Florent","Karstark","Harrenhal","Velaryon","Durrandon",
    "Redwyne","Moonwhisper","Silverleaf","Dawnrunner","Starfall","Nightbreeze",
    "Sunweaver","Shadowgrove","Frostpetal","Lightbranch","Windstride", "Bloodscar", "Aradoth","Blackthorn",
    "Bloodfallow",
    "Duskwarden",
    "Frostmarrow",
    "Grimhold",
    "Ironveil",
    "Nightbane",
    "Ravenscar",
    "Shadowrend",
    "Stormvein"
];

// Functions
function generateFullName() {
    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLast  = lastNames[Math.floor(Math.random() * lastNames.length)];
    const output = document.getElementById("fullNameOutput");
    output.textContent = randomFirst + " " + randomLast;

    // Trigger fade-in animation
    output.style.animation = 'none';
    void output.offsetWidth; // restart animation
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

    // Trigger fade-in animation
    output.style.animation = 'none';
    void output.offsetWidth; // restart animation
    output.style.animation = 'fadeInUp 0.5s forwards';
}

// Attach buttons after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("fullNameBtn").addEventListener("click", generateFullName);
    document.getElementById("matchLastBtn").addEventListener("click", generateMatchingLastName);
});
