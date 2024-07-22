function calculateGrade() {
  // Get input value
  const marks = parseInt(document.getElementById("marksInput").value);

  // Define grade ranges
  let grade;

  if (marks >= 80 && marks <= 100) {
    grade = "A";
  } else if (marks >= 60 && marks < 80) {
    grade = "B";
  } else if (marks >= 50 && marks < 60) {
    grade = "C";
  } else if (marks >= 40 && marks < 50) {
    grade = "D";
  } else if (marks >= 0 && marks < 40) {
    grade = "E";
  } else {
    // Invalid input
    alert("Invalid input! Marks should be between 0 and 100.");
    return;
  }

  // Display the grade
  document.getElementById("gradeResult").textContent = `Grade: ${grade}`;
}
console.log("connected")