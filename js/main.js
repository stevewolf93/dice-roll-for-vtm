const rollBtn = document.querySelector("#roll");
const list = document.querySelector(".list");
const successSum = document.querySelector("#success-sum");
let speciality = document.querySelector("#label-special");
rollBtn.addEventListener("click", roll);
speciality.addEventListener("click", toggleGlow);

function roll() {
  // declaration of necessary variables
  let numberOfDice = document.querySelector("#dice-number").value;
  let difficulty = document.querySelector("#difficulty").value;
  let numberOfDiceMin = document.querySelector("#dice-number").min;
  let difficultyMin = document.querySelector("#difficulty").min;
  let numberOfDiceMax = document.querySelector("#dice-number").max;
  let difficultyMax = document.querySelector("#difficulty").max;
  let special = document.querySelector("#special").checked;
  let result = [];
  let success = 0;
  // check if values in the inputs are valid
  if (
    parseInt(numberOfDiceMax) >= parseInt(numberOfDice) &&
    parseInt(numberOfDice) >= parseInt(numberOfDiceMin) &&
    parseInt(difficultyMax) >= parseInt(difficulty) &&
    parseInt(difficulty) >= parseInt(difficultyMin)
  ) {
    // loop to determine the individual roll values
    for (let i = 0; i < numberOfDice; i++) {
      let rollValue = Math.round(Math.random() * 10 + 0.5);
      result.push(rollValue);
      if (rollValue === 1) {
        success -= 1;
      } else if (rollValue > 1 && rollValue < difficulty) {
        success += 0;
      } else if (rollValue === 10 && special === true) {
        success += 2;
      } else {
        success += 1;
      }
    }
    // reset the ul container (important for multiple rolls)
    list.innerHTML = "";
    // loop to asign sorted roll values to list items
    for (let i = 0; i < result.length; i++) {
      let listItemContent = document.createTextNode(
        result.sort((a, b) => b - a)[i]
      );
      let listItem = document.createElement("li");
      listItem.appendChild(listItemContent);
      list.appendChild(listItem);
    }
    // remove hidden value from result container and results
    let resultContainer = document.querySelector(".result-container");
    resultContainer.classList.remove("hide");
    list.classList.remove("hide");
    // asign successes to the span
    let successSumContent = success;
    successSum.innerHTML = successSumContent;
  } else {
  } 
  return [result, success];
}

function toggleGlow() {
  let special = document.querySelector("#special");
  if (special.checked === true) {
    speciality.classList.remove("no-glow");
    speciality.classList.add("glow");
  } else {
    speciality.classList.remove("glow");
    speciality.classList.add("no-glow");
  }
}
