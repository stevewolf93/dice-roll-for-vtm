// later its grabbed from userinput
//determins how many dice will be used for the throw
let numberOfDice = 3;
// for now static
let baseDifficulty =6; // most common standart roll is against 6
let modifierDificulty = 0; // later grabbed from user input or a selection of options
// this lets the difficulty never be higher than the max rollValue => impossible roll
let finalDifficulty =
  baseDifficulty + modifierDificulty <= 10
    ? baseDifficulty + modifierDificulty
    : 10;
// determins what kind of dice is used
let diceToUse = 10; // VtM is a gamesystem that uses 10 sided dice
// special determins if a 10 is counted as 2 successes or not
let special = true;

/*
 * global variable to count successes
 * crit = 2 successes
 * success = 1 success
 * fail = 0 successes
 * botch = -1 success
 */
let success = 0;
// generic counter varialbles for each type (statistical purpose)
let botchesCount = 0;
let failuresCount = 0;
let successCount = 0;
let critCount = 0;
// first Output line tells the final difficulty for the player
console.log(`The Final difficulty of the roll is ==> ${finalDifficulty} <==`);
// loop for the dice roll
for (let counter = 0; counter < numberOfDice; counter++) {
  // determine the roll and round it to a natural number
  let rollValue = Math.round(Math.random() * diceToUse + 0.5);
  // check for botches
  if (rollValue === 1) {
    // output the order of the roll, the result off the roll and its category
    console.log(`${counter + 1}. Roll resulted in a ${rollValue} --> botch`);
    // substract 1 from success
    success -= 1;
    // add 1 to botch counter
    botchesCount += 1;
    // check for normal fails
  } else if (rollValue > 1 && rollValue < finalDifficulty) {
    // output the order of the roll, the result off the roll and its category
    console.log(`${counter + 1}. Roll resulted in a ${rollValue} -->  fail`);
    // add 1 to failure counter no need to add or substract from successes
    failuresCount += 1;
    // check for crits
  } else if (rollValue === 10 && special === true) {
    // output the order of the roll, the result off the roll and its category
    console.log(`${counter + 1}. Roll resulted in a ${rollValue} --> CRIT`);
    // add 2 to sucesses
    success += 2;
    // add 1 to crit counter
    critCount += 1;
    // check for successes
  } else {
    // output the order of the roll, the result off the roll and its category
    console.log(`${counter + 1}. Roll resulted in a ${rollValue} --> success`);
    // add 1 to successes
    success += 1;
    // add 1 to success counter
    successCount += 1;
  }
  // push every rollValue into an array for later use
}
// conditional output based on the number of successes rolled in the loop
if (success === 0) {
  console.log(`Your action failed == ${success} successes`);
} else if (success === 1) {
  console.log(`Your action was a marginal success == ${success} success`);
} else if (success === 2) {
  console.log(`Your action was a moderate success == ${success} successes`);
} else if (success === 3) {
  console.log(`Your action was a complete success == ${success} successes`);
} else if (success === 4) {
  console.log(`Your action was a exeptional success == ${success} successes`);
} else if (success === 5) {
  console.log(`Your action was a phenomenal success == ${success} successes`);
} else if (success > 5) {
  console.log(`Your action was a masterful success == ${success} successes`);
} else {
  console.log(
    `Your action failed in a horrible manner == ${success} successes`
  );
}
// outputs for easier countin in statistic use
console.log(`Crit Count: ${critCount} which is ${(critCount/numberOfDice)*100} %`);
console.log(`Successes: ${successCount} which is ${(successCount/numberOfDice)*100} %`);
console.log(`fail Count: ${failuresCount} which is ${(failuresCount/numberOfDice)*100} %`);
console.log(`Botches: ${botchesCount} which is ${(botchesCount/numberOfDice)*100} %`);


