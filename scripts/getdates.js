let yr = new Date().getFullYear();
let today = new Date();
let author = "Emmanuel Bawuni Yanwube";
let place = "Accra, Ghana";

// \u00A9 is the unicode for the copyright symbol
document.getElementById("copyright").innerHTML = `\u00A9 ${yr} | ${author} | ${place}`;

// Format today’s date nicely
let options = { year: 'numeric', month: 'long', day: 'numeric' };
let formattedDate = today.toLocaleDateString(undefined, options);

document.getElementById("modified").innerHTML = `Last Modified: ${formattedDate}`;