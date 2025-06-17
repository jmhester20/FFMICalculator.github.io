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
  resultDiv.innerHTML = `
    FFMI: ${ffmi.toFixed(2)}<br>
    Adjusted FFMI (for 1.8m height): ${adjustedFFMI.toFixed(2)}
  `;
}
