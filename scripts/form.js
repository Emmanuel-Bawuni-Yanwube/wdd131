const products = [
  {
    id: "fc-1888",
    name: "Iphone 14 Pro",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Samsung Galaxy S23 Ultra",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Google Pixel 7 Pro",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Huawei P50 Pro",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Infinix Zero 5G 2023",
    averagerating: 5.0
  }
];

// Wait until DOM is loaded to avoid element access errors
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------------------------------------------------------
  // Populate product <select> dropdown
  // ---------------------------------------------------------------------------
  const prodSelect = document.getElementById("prodName");
  if (prodSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.name;
      option.textContent = product.name;
      prodSelect.appendChild(option);
    });
  }

  

  // ---------------------------------------------------------------------------
  // FOOTER UPDATE (using existing footer in HTML)
  // ---------------------------------------------------------------------------
  const copy = document.getElementById("copywrite");
  const modified = document.getElementById("modified");

  if (copy) {
    const year = new Date().getFullYear();
    copy.textContent = `© ${year} | Emmanuel Bawuni Yanwube | Accra, Ghana`;
  }

  if (modified) {
    const lastMod = new Date(document.lastModified);
    const formattedDate = `${lastMod.toLocaleDateString("en-US")} ${lastMod.toLocaleTimeString("en-US")}`;
    modified.textContent = `Last Modified: ${formattedDate}`;
  }

});
