let rollBtn = document.querySelector("#roll");
rollBtn.addEventListener("click", roll);
function roll() {
  let numberOfDice = document.querySelector("#dice-number").value;
  let difficulty = document.querySelector("#difficulty").value;
  let special = document.querySelector("#special").value;
  let result = [];
  let success = 0;
  for (let i = 0; i < numberOfDice; i++) {
    let rollValue = Math.round(Math.random() * 10 + 0.5);
    result.push(rollValue);
    if (rollValue === 1) {
      success -= 1;
    } else if (rollValue > 1 && rollValue < difficulty) {
      success +=0
    } else if (rollValue === 10 && special === true) {
      success += 2;
    } else {
      success += 1;
    }
  }
  console.log(result, success)
  return [result, success];
}
