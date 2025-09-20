const temperature = 26;  // Test wind chill by setting this value to 51
const wind = 22;
const conditions = "Partly Sunny / Cloudy";

function calculateWindChill(T, V) {
    return 35.74 + (0.6215*T) - (35.75*(Math.pow(V, 0.16))) + (0.4275*T)*(Math.pow(V, 0.16));
}

// For Fun & Experience - Added "Calculate Wind Chill" button
// if (temperature <= 50 && wind > 3) {
//     chill = calculateWindChill(temperature, wind);
// }

document.getElementById("temp").innerHTML = temperature + "&deg;C";
document.getElementById("condition").innerHTML = conditions;
document.getElementById("wind").innerHTML = wind + " km/h";

document.getElementById("chill").innerHTML = "N/A";

// const chill = calculateWindChill(temperature,wind);
// document.getElementById("chill").innerText = chill.toFixed(2);

document.getElementById("chill-button").addEventListener("click", () => {
    // Calculate and update the "chill" value
    let chill = "N/A";
    document.getElementById("chill").innerHTML = chill;

    // console.log("Chill1 = " + chill);           // TODO DEBUG
    if (temperature <= 50 && wind > 3) {
        chill = calculateWindChill(temperature, wind);
        // console.log("Chill2 = " + chill);       // TODO DEBUG
        const stringChill = String(chill.toFixed(2));
        // console.log("Chill = " + stringChill);  // TODO DEBUG
        document.getElementById("chill").innerHTML = String(chill.toFixed(2)) + "&deg;C";
    } else {
        // console.log("Chill3 = " + chill);       // TODO DEBUG
        chill = "N/A"
        document.getElementById("chill").innerHTML = chill;
    }
})
// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    const lastModEl = document.getElementById('lastModified');
    if (!lastModEl) return; // avoid errors if element is missing

    const lm = document.lastModified || '';
    const modifiedDate = new Date(lm);
    let output;

    if (lm && !isNaN(modifiedDate)) {
        output = 'Last Modified: ' + modifiedDate.toLocaleDateString() + ' ' + modifiedDate.toLocaleTimeString();
    } else if (lm) {
        // fallback to raw string if it can't be parsed as a Date
        output = 'Last Modified: ' + lm;
    } else {
        output = 'Last Modified: (not available)';
    }

    lastModEl.textContent = output;
});
// ...existing code...