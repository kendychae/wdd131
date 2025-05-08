// Display current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speedMph, 0.16) +
        0.4275 * tempF * Math.pow(speedMph, 0.16)
    ).toFixed(1);
}

// Static values (later can be replaced with dynamic API data)
const temperature = parseFloat(document.getElementById("temperature").textContent);
const windspeed = parseFloat(document.getElementById("windspeed").textContent);

if (temperature <= 50 && windspeed > 3) {
    document.getElementById("windchill").textContent = `${calculateWindChill(
        temperature,
        windspeed
    )} °F`;
} else {
    document.getElementById("windchill").textContent = "N/A";
}
