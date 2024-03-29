// Load the event listeners after the dom has been built
document.addEventListener("DOMContentLoaded", () => {
// 1- Selecting Possible targets that can make any action in game
  const startGame = document.querySelector("#startGame");

  const rollDice = document.querySelector("#rollDice");

  const holdScore = document.querySelector("#holdScore");
// 1- Selecting Possible targets that can make any action in game

// 2- Selecting Possible targets in reaction of something

  // 1. Target Player 1 title will have a big dot to show a reaction from losing round at cause of face dice number 1, or just at cause of his rivalry that can make "hold" so will be our round and we will have the big dot after the title player (applies same thing for player2) can react to =
  // - newGame (by default the dot will be positioned for player 1)
  // - diceDots (if number 1 dot appears lose round and pass to the opponent)
  // - holdScore (if I or he-she-it hold the score, saves the score to global and pass to opponent the round)
  let player1 = document.querySelector("#player1Title");

  let player2 = document.querySelector("#player2Title");

  // 2. Current Score Player1 (CS1/2) will react to=
  //  rollDice, if the dice contains a number bigger than 1 randomly, will achieve it in currentScore1 every time he rolls the dice until gets 1, but we don´t lose our round until we see a 1 in the dot or hold the current score to achieve it in globalScore1/2 (GS1/GS2)

  const currentScore1 = document.querySelector("#CS1");

  const currentScore2 = document.querySelector("#CS2");

  console.log(currentScore2);

  // 3. Global Score will react to=
  //  - holdScore, reacts because will take the score from CS1/2 at the moment the user decide to send the current score to global
  const globalScore1 = document.querySelector("#GS1");

  const globalScore2 = document.querySelector("#GS2");

  // 4. dice that has dots
  const dice = document.querySelector("#dice");


  // 5. dotPlayer remark what player has the round
  const dotPlayer = document.createElement("i");

  dotPlayer.classList.add("fa-solid", "fa-circle");

  dotPlayer.style.color = "#eb4d4c";

  dotPlayer.style.margin = "calc(clamp(27%, 15vw, 50px) / 4)";
  // 5. dotPlayer remark what player has the round

  // 6. Select all dots elements of the dice
  const dotElements = document.querySelectorAll(".dot");
  
  // Generates a random number between 1 and 6 that we don't know at this point
  let randomNumber;


// 2- Selecting Possible targets in reaction of something

  // Function event listener to not be in the global window but to be in content load to have secured that our code works after charged html
  loadEventListeners();


  // 1. Event Listeners
  function loadEventListeners() {
    // Function that New game starts from scratch
    startGame.addEventListener("click", beginGame);

    // Function that generates random faces of the dice
    rollDice.addEventListener("click", generateRandomFace);

    // Function that generates random faces of the dice
    holdScore.addEventListener("click", handleHoldScore);
  }
  // 1. Event Listeners

// 2- Selecting Possible targets in reaction of something


// 3- creating mini functions (utilities functions):

  // 1. Dice design
  function showDiceFaceGenerated() {
    // function that changes the color of the elements according to the random number
    dotElements.forEach((dot, index) => {
      // Restore the original color
      dot.style.color = "#fff";

      // Color the points according to the random number
      switch (randomNumber) {
        case 1:
          if (index === 4) {
            dot.style.color = "#eb4d4c";
          };
          break;
        case 2:
          if (index === 0 || index === 8) {
            dot.style.color = "#eb4d4c";
          };
          break;
        case 3:
          if (index === 0 || index === 4 || index === 8) {
            dot.style.color = "#eb4d4c";
          };
          break;
        case 4:
          if (index === 0 || index === 2 || index === 6 || index === 8) {
            dot.style.color = "#eb4d4c";
          };
          break;
        case 5:
          if (
            index === 0 ||
            index === 2 ||
            index === 4 ||
            index === 6 ||
            index === 8
          ) {
            dot.style.color = "#eb4d4c";
          };
          break;
        case 6:
          if (
            index === 0 ||
            index === 1 ||
            index === 2 ||
            index === 6 ||
            index === 7 ||
            index === 8
          ) {
            dot.style.color = "#eb4d4c";
          };
          break;
      };

    });
  };
  // 1. Dice design


  // 2. Random number function extracted from MDN
  function generateRandomInt(min = 0, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };
  // 2. Random number function extracted from MDN


  // 3. Keeping and linked to random number at round score
  function keepRoundScore(cs) {
    let roundScore = parseInt(cs.textContent) + randomNumber;

    const currentPlayer = checkDotPlayerPosition();

    if (currentPlayer === "player1" && randomNumber === 1) {
      cs.textContent = "0";
      player2.append(dotPlayer);
      return 0;
      // Aquí pasas el elemento de puntaje actual de jugador 1
    };
    
    if (currentPlayer === "player2" && randomNumber === 1) {
      cs.textContent = "0";
      player1.append(dotPlayer);
      return 0; // Aquí pasas el elemento de puntaje actual de jugador 2
    };

    cs.textContent = roundScore;
    console.log(roundScore);
    return roundScore;
  };
  // 3. Keeping and linked to random number at round score


  // 4. function that keeps the round score in the global
  function keepGlobalScore(cs, gs, player) {

    let mainScore = parseInt(cs.textContent) + parseInt(gs.textContent);

    gs.textContent = mainScore;

    cs.textContent = 0;

    player.append(dotPlayer);

    const currentPlayer = checkDotPlayerPosition();

    if (currentPlayer === "player2" && mainScore >= 100) {

      /* player2.remove(dotPlayer);
      player1.append(dotPlayer); */
      alert(`player 1 you win!`);
      location.reload();
      
    } else if (currentPlayer === "player1" && mainScore >= 100) {
      /* player1.remove(dotPlayer);
      player2.append(dotPlayer); */
      alert(`player 2 you win!`);
      location.reload();
      
    };

  };
  // 4. function that keeps the round score in the global


  // 5. Check where the ball is to give validity to the player who has it
  function checkDotPlayerPosition() {
    if (player1.contains(dotPlayer)) {
      console.log("El dotPlayer está en el jugador 1");
      return "player1";
    } else if (player2.contains(dotPlayer)) {
      console.log("El dotPlayer está en el jugador 2");
      return "player2";
    } else {
      console.log("El dotPlayer no está en ningún jugador");
      return "none";
    }
  };
  // 5. Check where the ball is to give validity to the player who has it

// 3- creating mini functions (utilities functions):



// 4- Main Functions

  // 1. Function that allows the default game to begin in Player1
  function beginGame() {
    globalScore1.textContent = "0";
    globalScore2.textContent = "0";
    currentScore1.textContent = "0";
    currentScore2.textContent = "0";

    player1.append(dotPlayer);
  };
  // 1. Function that allows the default game to begin in Player1  

  // 2. function that generates random face to the given depending on the random number
  function generateRandomFace() {
    // Dice link (the switch) with the random number to show
    randomNumber = generateRandomInt(1, 7);

    const currentPlayer = checkDotPlayerPosition();
    if (currentPlayer === "player1") {
      keepRoundScore(currentScore1); // Aquí pasas el elemento de puntaje actual de jugador 1
    } else if (currentPlayer === "player2") {
      keepRoundScore(currentScore2); // Aquí pasas el elemento de puntaje actual de jugador 2
    };

    // llamada a función que muestra numero aleatorio en el  dado
    showDiceFaceGenerated();
  };
  // 2. function that generates random face to the given depending on the random number

  

  // 3. Function that reads where the ball is and being able to give permission to the ball holder to play
  function handleHoldScore() {
    const currentPlayer = checkDotPlayerPosition();
    if (currentPlayer === "player1") {
      keepGlobalScore(currentScore1, globalScore1, player2);
    } else if (currentPlayer === "player2") {
      keepGlobalScore(currentScore2, globalScore2, player1);
    };
  };
  // 3. Function that reads where the ball is and being able to give permission to the ball holder to play

// 4- Main Functions
});
