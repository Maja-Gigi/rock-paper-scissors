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
  }

  if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
     result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }
  }

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }
  }



  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}`);
}