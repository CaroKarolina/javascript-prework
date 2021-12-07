let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}
if(randomNumber == 2){
    computerMove = 'papier';
  }
if(randomNumber == 3){
    computerMove = 'nożyce';
  }

printMessage('Mój ruch to: ' + computerMove);
//uzupełnij go o dwa bloki else if. 
//Powinny one obsłużyć przypadki wylosowania liczby 2 i 3. W tych sytuacjach zmienna 
//computerMove ma otrzymać odpowiednią wartość – 'papier' lub 'nożyce'.