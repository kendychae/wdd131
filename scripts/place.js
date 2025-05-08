// Footer year and last modified
const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.textContent = document.lastModified;

// Wind Chill Calculator
function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}

// Get values from HTML
const temp = parseFloat(document.getElementById("temperature").textContent);
const speed = parseFloat(document.getElementById("windspeed").textContent);
const windchillOutput = document.getElementById("windchill");

if (temp <= 50 && speed > 3) {
    windchillOutput.textContent = `${calculateWindChill(temp, speed)} °F`;
} else {
    windchillOutput.textContent = "N/A";
}
