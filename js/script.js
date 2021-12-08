function playGame(playerInput){
  clearMessages();

  function getMoveName(argMoveId){ 
      if(argMoveId == 1) {
          return 'kamień';
      } else if (argMoveId == 2) {
          return 'papier';
      } else if (argMoveId == 3 ) {
          return 'nożyce';
      } else {
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
      }
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  let playerMove = playerInput;
  
  function displayResult(argComputerMove, argPlayerMove) {
      console.log('Wywołano funkcję displayResult z argumentami: ' + argPlayerMove +', ' + argComputerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

      if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
          printMessage('Wygrywasz');
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
          printMessage('Wygrywasz');
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
          printMessage('Wygrywasz');
      } else if (argPlayerMove == argComputerMove){
          printMessage('Remis');
      } else {
          printMessage ('Przegrywasz...');
      }
  }
  displayResult(computerMove, playerMove); 
}

let buttonRock = document.getElementById('play1');
buttonRock.addEventListener('click', function(){
  playGame('kamień');
});
let buttonPaper = document.getElementById('play2');
buttonPaper.addEventListener('click', function(){
  playGame('papier');
});
let buttonScissors = document.getElementById('play3');
buttonScissors.addEventListener('click', function (){
  playGame('nożyce');
});
