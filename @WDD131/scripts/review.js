// Product Array
const products = [
  { id: 1, name: "Air Conditioner" },
  { id: 2, name: "Solar Panel" },
  { id: 3, name: "Water Heater" },
  { id: 4, name: "Refrigerator" }
];

// Populate Select Field
const selectEl = document.getElementById("productName");

products.forEach(product => {
  const opt = document.createElement("option");
  opt.value = product.id;
  opt.textContent = product.name;
  selectEl.appendChild(opt);
});

// Setup localStorage Counter
if (!localStorage.getItem("reviewCount")) {
  localStorage.setItem("reviewCount", "0");
}

// Form Submit
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let count = Number(localStorage.getItem("reviewCount"));
  count++;

  localStorage.setItem("reviewCount", count);

  alert("Review submitted! Total reviews so far: " + count);

  this.reset();
});
