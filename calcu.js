document.addEventListener("DOMContentLoaded", () => {
  const distance = document.getElementById("distance");
  const distanceInput = document.getElementById("distanceInput");
  const distanceValue = document.getElementById("distanceValue");
  const location = document.getElementById("location");
  const baseRate = document.getElementById("locationRate");
  const total = document.getElementById("total");

  function calculateCost() {
    const miles = parseFloat(distance.value) || 0;
    const rate = parseFloat(baseRate.value) || 0;

    const costPerMile = 10;
    const totalCost = rate + (miles * costPerMile);

    total.textContent = totalCost.toFixed(0);
  }

  // Sync slider → input
  distance.addEventListener("input", () => {
    distanceInput.value = distance.value;
    distanceValue.textContent = distance.value;
    calculateCost();
  });

  // Sync input → slider
  distanceInput.addEventListener("input", () => {
    let value = parseInt(distanceInput.value) || 0;

    if (value < 1) value = 1;
    if (value > 120){
      value = 0;
      
    }

    distance.value = value;
    distanceValue.textContent = value;
    calculateCost();
  });
 
  location.addEventListener("change", () => {
    baseRate.value = location.value;
    calculateCost();
  });

  // If user edits rate manually
  baseRate.addEventListener("input", calculateCost);

  calculateCost();
});