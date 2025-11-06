document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bmiForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value) / 100;
    const weight = parseFloat(document.getElementById("weight").value);
    const bmi = (weight / (height * height)).toFixed(2);
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 24.9) status = "Normal";
    else if (bmi < 29.9) status = "Overweight";
    else status = "Obese";
    document.getElementById("bmiResult").textContent = `Your BMI is ${bmi} (${status})`;
  });
});