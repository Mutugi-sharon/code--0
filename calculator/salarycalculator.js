function calculateNetSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value);

  // Constants for tax rates and thresholds
  const taxRates = [
    { min: 0, max: 24000, rate: 0.1 },
    { min: 24001, max: 32333, rate: 0.25 },
    { min: 32334, max: 40333, rate: 0.3 },
    { min: 40334, max: Infinity, rate: 0.35 },
  ];

  // Calculate Gross Salary
  const grossSalary = basicSalary + benefits;

  // Calculate Tax (PAYE)
  let taxableIncome = grossSalary;
  let tax = 0;

  for (let i = 0; i < taxRates.length; i++) {
    if (taxableIncome <= 0) {
      break;
    }

    const rate = taxRates[i].rate;
    const min = taxRates[i].min;
    const max = taxRates[i].max;

    if (taxableIncome > max) {
      tax += (max - min + 1) * rate;
    } else {
      tax += (taxableIncome - min + 1) * rate;
    }

    taxableIncome -= max - min + 1;
  }

  // Calculate NHIF Deductions (assuming a flat rate for simplicity)
  const nhifRate = 0.015; // 1.5% of gross salary
  const nhifDeductions = grossSalary * nhifRate;

  // Calculate NSSF Deductions (assuming a flat rate for simplicity)
  const nssfRate = 0.06; // 6% of gross salary
  const nssfDeductions = grossSalary * nssfRate;

  // Calculate Net Salary
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

  // Display results
  document.getElementById(
    "grossSalary"
  ).textContent = `KES ${grossSalary.toFixed(2)}`;
  document.getElementById("tax").textContent = `KES ${tax.toFixed(2)}`;
  document.getElementById(
    "nhifDeductions"
  ).textContent = `KES ${nhifDeductions.toFixed(2)}`;
  document.getElementById(
    "nssfDeductions"
  ).textContent = `KES ${nssfDeductions.toFixed(2)}`;
  document.getElementById("netSalary").textContent = `KES ${netSalary.toFixed(
    2
  )}`;
}
console.log("connected")