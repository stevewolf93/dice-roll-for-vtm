let numberOfRolls = 1000000;
let diceToUse = 10;

function statistic(numberOfDice, finalDifficulty, special) {
  let botchesCount = 0;
  let failuresCount = 0;
  let successCount = 0;
  for (i = 0; i < numberOfRolls; i++) {
    let SucsessPerRoll = 0;
    for (let counter = 0; counter < numberOfDice; counter++) {
      let rollValue = Math.round(Math.random() * diceToUse + 0.5);
      if (rollValue === 1) {
        SucsessPerRoll -= 1;
      } else if (rollValue > 1 && rollValue < finalDifficulty) {
      } else if (rollValue === 10 && special === true) {
        SucsessPerRoll += 2;
      } else {
        SucsessPerRoll += 1;
      }
    }
    if (SucsessPerRoll < 0) {
      botchesCount++;
    } else if (SucsessPerRoll === 0) {
      failuresCount++;
    } else {
      successCount++;
    }
  }
  console.log(`In ${numberOfRolls} rolls with ${numberOfDice} dice against difficulty ${finalDifficulty}`);
  console.log(
    `there were ${successCount} sucesses ${
      (successCount / numberOfRolls) * 100
    }% of all rolls`
  );
  console.log(
    `there were ${failuresCount} failures ${
      (failuresCount / numberOfRolls) * 100
    }% of all rolls`
  );
  console.log(
    `there were ${botchesCount} botches ${
      (botchesCount / numberOfRolls) * 100
    }% of all rolls`
  );
  return successCount, botchesCount, failuresCount;
}
