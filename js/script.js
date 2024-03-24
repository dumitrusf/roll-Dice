// 1- Selecting Possible targets that can make any action in game

// 1. select action that start a new game
const newGame = document.querySelector("#startGame")

console.log(newGame);
// 1. select action that start a new game


// 2. action roll the Dice 

const rollDice = document.querySelectorAll("#rollDice");

console.log(rollDice);

// 2. action roll the Dice 


// 3. action roll the Dice 

const holdScore = document.querySelectorAll("#holdScore");

console.log(holdScore);

// 3. action roll the Dice 


// 1- Selecting Possible targets that can make any action in game





// 2- Selecting Possible targets in reaction of something


// 1. Target Player 1 title will have a big dot to show a reaction from losing round at cause of face dice number 1, or just at cause of his rivalry that can make "hold" so will be our round and we will have the big dot after the title player (applies same thing for player2) can react to =
// - newGame (by default the dot will be positioned for player 1)
// - diceDots (if number 1 dot appears lose round and pass to the opponent)
// - holdScore (if I or he-she-it hold the score, saves the score to global and pass to opponent the round)
const player1 = document.querySelector("#player1Title");

console.log(player1);
// 1. Target Player 1 title 

// 2. Target Player 2 title
const player2 = document.querySelector("#player2Title");

console.log(player2);
// 2. Target Player 2 title


// 3. Current Score Player1 (CS1/2) will react to=
//  rollDice, if the dice contains a number bigger than 1 randomly, will achieve it in currentScore1 every time he rolls the dice until gets 1, but we don´t lose our round until we see a 1 in the dot or hold the current score to achieve it in globalScore1/2 (GS1/GS2) 

const currentScore1 = document.querySelector("#CS1");

console.log(currentScore1);

// 3. Current Score Player1


// 4. Current Score Player2

const currentScore2 = document.querySelector("#CS2");

console.log(currentScore2);

// 4. Current Score Player1


// 5. Global Score will react to=
//  - holdScore, reacts because will take the score from CS1/2 at the moment the user decide to send the current score to global  

const globalScore1 = document.querySelector("#GS1");

console.log(globalScore1);

// 5. Global Score Player1


// 6. Global Score Player2

const globalScore2 = document.querySelector("#GS2");

console.log(globalScore2);

// 6. Global Score Player1


// 7. the dice that has reacts to=
// -rollDice, the dice will generate a random number only if rollDice is actioned 

const dice = document.querySelector("#dice");

console.log(dice);

// 7. dice that has dots 


// 2- Selecting Possible targets in reaction of something




// 3. Generation of content



// event Listener rollDice al pulsar 

/* rollDice.addEventListener("click", function() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
  });
   */




  
