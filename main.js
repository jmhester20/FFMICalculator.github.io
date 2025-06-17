function calculateFFMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const heightCm = parseFloat(document.getElementById('height').value);
  const bodyFat = parseFloat(document.getElementById('bodyFat').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(weight) || isNaN(heightCm) || isNaN(bodyFat)) {
    resultDiv.textContent = "Please fill in all fields correctly.";
    resultDiv.style.color = "red";
    return;
  }

  const heightM = heightCm / 100;
  const leanMass = weight * (1 - bodyFat / 100);
  const ffmi = leanMass / (heightM * heightM);
  const adjustedFFMI = ffmi + 6.1 * (1.8 - heightM);

  resultDiv.style.color = "#222";
  resultDiv.innerHTML = `
    FFMI: ${ffmi.toFixed(2)}<br>
    Adjusted FFMI (for 1.8m height): ${adjustedFFMI.toFixed(2)}
  `;
}
