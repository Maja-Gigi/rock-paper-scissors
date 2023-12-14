// Update the score

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}

updateScoreElement();

// Definiramo kako kompjuter radi korake
function pickComputerMove() {
  const randomNumber = Math.random();
    
  let computerMove = '';

  if(randomNumber >= 0 && randomNumber < 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}

function playGame(playerMove) {
  // Definiramo kako kompjuter radi korake
  const computerMove = pickComputerMove();

  // Uspoređujemo kompjuterov korak s našim korakom - naš korak je onaj koji odaberemo stisnuti
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
     result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }

  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }
  }

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-moves').innerHTML = `You 
  <img src="images/${playerMove}-emoji.png" class="move-icon">
  <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
   
  document.querySelector('.js-result').innerHTML = `${result}`;
  
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let isAutoPlaying = false;
let intervalID;

//Funkcija bez arrow funkcije
function autoPlay() {
  if (!isAutoPlaying) {
      intervalID = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
   }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalID);
    isAutoPlaying = false;
  }
}