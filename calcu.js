document.addEventListener("DOMContentLoaded", () => {

  const calculators = document.querySelectorAll(".containerCal");

  calculators.forEach((calc) => {
    const distance = calc.querySelector(".distance");
    const distanceInput = calc.querySelector(".distanceInput");
    const distanceValue = calc.querySelector(".distanceValue");
    const location = calc.querySelector(".location");
    const baseRate = calc.querySelector(".locationRate");
    const total = calc.querySelector(".total");

    function calculateCost() {
      const miles = parseFloat(distance.value) || 0;
      const rate = parseFloat(baseRate.value) || 0;

      const costPerMile = 15;
      const totalCost = rate + (miles * costPerMile);

      total.textContent = totalCost.toFixed(0);
    }

    // Slider → Input
    distance.addEventListener("input", () => {
      distanceInput.value = distance.value;
      distanceValue.textContent = distance.value;
      calculateCost();
    });

    // Input → Slider
    distanceInput.addEventListener("input", () => {
      let value = parseInt(distanceInput.value) || 0;
      if (value < 1) value = 1;
      if (value > 100) value = 100;

      distance.value = value;
      distanceValue.textContent = value;
      calculateCost();
    });
    // Location change
    location.addEventListener("change", () => {
      baseRate.value = location.value;
      calculateCost();
    });
    baseRate.addEventListener("input", calculateCost);

    calculateCost();
  });

});
