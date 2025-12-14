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