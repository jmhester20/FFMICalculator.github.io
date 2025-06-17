function updatePlaceholders() {
  const unit = document.getElementById('unit').value;
  document.getElementById('weight').placeholder = unit === 'metric' ? 'e.g. 80 (kg)' : 'e.g. 175 (lbs)';
  document.getElementById('height').placeholder = unit === 'metric' ? 'e.g. 180 (cm)' : 'e.g. 70 (in)';
}

function calculateFFMI() {
  const unit = document.getElementById('unit').value;
  let weight = parseFloat(document.getElementById('weight').value);
  let height = parseFloat(document.getElementById('height').value);
  const bodyFat = parseFloat(document.getElementById('bodyFat').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(weight) || isNaN(height) || isNaN(bodyFat)) {
    resultDiv.textContent = "Please fill in all fields correctly.";
    resultDiv.style.color = "#FF4D4D";
    return;
  }

  if (unit === 'imperial') {
    weight = weight * 0.453592; 
    height = height * 2.54;    
  }

  const heightM = height / 100;
  const leanMass = weight * (1 - bodyFat / 100);
  const ffmi = leanMass / (heightM * heightM);
  const adjustedFFMI = ffmi + 6.1 * (1.8 - heightM);

   resultDiv.style.color = "#FFD700";
  resultDiv.innerHTML = `FFMI: ${ffmi.toFixed(2)}<br>`;

  const gaugeDiv = document.getElementById('gauge');
  let category = "";
  
  if (ffmi < 18) {
    category = "Below average - minimal muscle development.";
  } else if (ffmi < 20) {
    category = "Average - recreational lifters or active individuals.";
  } else if (ffmi < 22) {
    category = "Athletic-level - consistent lifters or non-competitive bodybuilders.";
  } else if (ffmi < 24) {
    category = "Local-level  -  high muscle mass.";
  } else if (ffmi < 26) {
    category = "National-level  - very high muscle mass.";
  } else {
    category = "World-class level - elite genetics or enhancement.";
  }

  gaugeDiv.innerHTML = `Category: ${category}`;
  gaugeDiv.style.color = "#999";
  gaugeDiv.style.marginTop = "1rem";
  gaugeDiv.style.textAlign = "center";

}
