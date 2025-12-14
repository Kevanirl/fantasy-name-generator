function generateName() {
    const prefixes = [
        "El", "Ar", "Fa", "Da", "Ka", "Lu", "Mor", "Va", "Ze"
    ];

    const suffixes = [
        "ion", "eth", "or", "iel", "a", "en", "us", "mir", "th"
    ];

    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    const fantasyName = randomPrefix + randomSuffix;

    document.getElementById("nameOutput").textContent = fantasyName;
}
function generatePairedName() {
    const firstName = document.getElementById("firstName").value.trim();

    if (firstName === "") {
        alert("Please enter a first name!");
        return;
    }

    // Define some syllables to pair nicely with the first name
    const suffixes = ["ion", "eth", "or", "iel", "a", "en", "us", "mir", "th", "ara", "is", "on", "ys"];

    // Pick a random suffix
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];

    // Optionally, take the first letter of the first name to influence the second name
    const firstLetter = firstName.charAt(0).toUpperCase();

    // Combine first letter with suffix to make it sound harmonious
    const secondName = firstLetter + randomSuffix;

    document.getElementById("pairedNameOutput").textContent = secondName;
}