const rollBtn = document.querySelector("#roll");
const list = document.querySelector(".list");
const successSum = document.querySelector("#success-sum");
rollBtn.addEventListener("click", roll);
function roll() {
  let numberOfDice = document.querySelector("#dice-number").value;
  let difficulty = document.querySelector("#difficulty").value;
  let special = document.querySelector("#special");
  let special2 = special.checked;
  let result = [];
  let success = 0;
  for (let i = 0; i < numberOfDice; i++) {
    let rollValue = Math.round(Math.random() * 10 + 0.5);
    result.push(rollValue);
    if (rollValue === 1) {
      success -= 1;
    } else if (rollValue > 1 && rollValue < difficulty) {
      success += 0;
    } else if (rollValue === 10 && special2 === true) {
      success += 2;
    } else {
      success += 1;
    }
  }
  list.innerHTML = "";
  for (let i = 0; i < result.length; i++) {
    let listItemContent = document.createTextNode(
      result.sort((a, b) => b - a)[i]
    );
    let listItem = document.createElement("li");
    listItem.appendChild(listItemContent);
    list.appendChild(listItem);
  }
  let successSumContent = success;
  successSum.innerHTML = successSumContent;
  console.log(special2);
  console.log(result, success);
  return [result, success];
}
