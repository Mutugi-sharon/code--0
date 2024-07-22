function checkSpeed() {
  const speedInput = document.getElementById("speedInput").value;
  const speed = parseInt(speedInput, 10);

  const speedLimit = 70;
  const pointsPer5KmOver = 1;

  if (speed < speedLimit) {
    document.getElementById("result").textContent = "Ok";
  } else {
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    if (demeritPoints > 12) {
      document.getElementById("result").textContent = "License suspended";
    } else {
      document.getElementById(
        "result"
      ).textContent = `Points: ${demeritPoints}`;
    }
  }
}
console.log("connected")