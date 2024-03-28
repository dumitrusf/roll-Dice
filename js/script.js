// Load the event listeners after the dom has been built
document.addEventListener("DOMContentLoaded", () => {
  // 1- Selecting Possible targets that can make any action in game

  // 1. select action that start a new game
  const startGame = document.querySelector("#startGame");

  console.log(startGame);
  // 1. select action that start a new game

  // 2. action roll the Dice

  const rollDice = document.querySelector("#rollDice");

  console.log(rollDice);

  // 2. action roll the Dice

  // 3. action roll the Dice

  const holdScore = document.querySelector("#holdScore");

  console.log(holdScore);

  // 3. action roll the Dice

  // 1- Selecting Possible targets that can make any action in game

  // 2- Selecting Possible targets in reaction of something

  // 1. Target Player 1 title will have a big dot to show a reaction from losing round at cause of face dice number 1, or just at cause of his rivalry that can make "hold" so will be our round and we will have the big dot after the title player (applies same thing for player2) can react to =
  // - newGame (by default the dot will be positioned for player 1)
  // - diceDots (if number 1 dot appears lose round and pass to the opponent)
  // - holdScore (if I or he-she-it hold the score, saves the score to global and pass to opponent the round)

  let player1 = document.querySelector("#player1Title");

  let player2 = document.querySelector("#player2Title");

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

  // 8. dotPlayer remark what player has the round

  const dotPlayer = document.createElement("i");

  dotPlayer.classList.add("fa-solid", "fa-circle");

  dotPlayer.style.color = "#eb4d4c";

  dotPlayer.style.margin = "calc(clamp(27%, 15vw, 50px) / 4)";

  // 8. dotPlayer remark what player has the round

  // Generates a random number between 1 and 6
  let randomNumber;

  // Select the .dot elements
  const dotElements = document.querySelectorAll(".dot");

  // 2- Selecting Possible targets in reaction of something

  // 3. Generation of content

  // event Listener rollDice al pulsar

  // Function event listener to not be in the global window
  loadEventListeners();

  // Event Listeners IMPORTANT
  function loadEventListeners() {
    // Function that New game starts from scratch
    startGame.addEventListener("click", beginGame);

    // Function that generates random faces of the dice
    rollDice.addEventListener("click", generateRandomFace);

    // Function that generates random faces of the dice
    holdScore.addEventListener("click", handleHoldScore);
  }
  // Event Listeners IMPORTANT

  // mini functions

  function showDiceFaceGenerated() {
    // function that changes the color of the elements according to the random number
    dotElements.forEach((dot, index) => {
      // Restore the original color
      dot.style.color = "#fff";

      // Colorea los puntos según el número aleatorio
      switch (randomNumber) {
        case 1:
          if (index === 4) {
            dot.style.color = "#eb4d4c";
          }
          break;
        case 2:
          if (index === 0 || index === 8) {
            dot.style.color = "#eb4d4c";
          }
          break;
        case 3:
          if (index === 0 || index === 4 || index === 8) {
            dot.style.color = "#eb4d4c";
          }
          break;
        case 4:
          if (index === 0 || index === 2 || index === 6 || index === 8) {
            dot.style.color = "#eb4d4c";
          }
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
          }
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
          }
          break;
      }

      console.log(randomNumber);
    });
  }

  function generateRandomInt(min = 0, max = 6) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

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

  // mini functions

  // Main Functions
  // Función que permite que empiece el juego
  function beginGame() {
    globalScore1.textContent = "0";
    globalScore2.textContent = "0";
    currentScore1.textContent = "0";
    currentScore2.textContent = "0";

    player1.append(dotPlayer);

    console.log("Nuevo Juego!");

    console.log(player1);
  }
  // Función que permite que empiece el juego

  // Función que e genera cara aleatoria al dado y numero aleatorio
  function generateRandomFace() {
    console.log("aquí tiene que generar una cara nueva");

    randomNumber = generateRandomInt(1, 7);

    const currentPlayer = checkDotPlayerPosition();
    if (currentPlayer === "player1") {
      keepRoundScore(currentScore1); // Aquí pasas el elemento de puntaje actual de jugador 1
    } else if (currentPlayer === "player2") {
      keepRoundScore(currentScore2); // Aquí pasas el elemento de puntaje actual de jugador 2
    }

    // llamada a función que muestra numero aleatorio en el  dado
    showDiceFaceGenerated();
  }

  // Función que e genera cara aleatoria al dado y numero aleatorio

  // función que guarda los puntos de ronda en el global
  function keepGlobalScore(cs, gs, player) {
    console.log("Tienes que recuperar los puntos de keepRoundScore GS1/2");

    let mainScore = parseInt(cs.textContent) + parseInt(gs.textContent);

    gs.textContent = mainScore;

    cs.textContent = 0;

    // <i class="fa-solid fa-circle" style="color: #eb4d4c;"></i>

    console.log(player);

    player.append(dotPlayer);

    const currentPlayer = checkDotPlayerPosition();

    if (currentPlayer === "player1" && mainScore >= 100) {

      alert(`player 1 you win!`);
      location.reload();
      
    } else if (currentPlayer === "player2" && mainScore >= 100) {
      alert(`player 2 you win!`); // Asumiendo que player2 es el elemento contenedor del jugador 2
      location.reload();
      
    }

  };

  // Asegúrate de que keepGlobalScore se llame solo dentro de una función que maneje la acción de "hold"
  function handleHoldScore() {
    const currentPlayer = checkDotPlayerPosition();
    if (currentPlayer === "player1") {
      keepGlobalScore(currentScore1, globalScore1, player2);
       // Asumiendo que player1 es el elemento contenedor del jugador 1
    } else if (currentPlayer === "player2") {
      keepGlobalScore(currentScore2, globalScore2, player1); // Asumiendo que player2 es el elemento contenedor del jugador 2
    }
  };

  // función que guarda los puntos de rona en el global

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

  

  // Main Functions
});
