/*
1. You’re going to store the gameboard as an 
   array inside of a Gameboard object,
   so start there! Your players are also 
   going to be stored in objects… and you’re
   probably going to want an object to control 
   the flow of the game itself.
2. Your main goal here is to have as little 
   global code as possible. 
   Try tucking everything away inside of a 
   module or factory. Rule of thumb: 
   if you only ever need ONE of something 
   (gameBoard, displayController), use a module. 
   If you need multiples of something (players!), 
   create them with factories.
3. Set up your HTML and write a JavaScript 
   function that will render the contents 
   of the gameboard array to the webpage 
   (for now you can just manually fill in 
   the array with "X"s and "O"s)
4. Build the functions that allow players to 
   add marks to a specific spot on
   the board, and then tie it to the DOM, 
   letting players click on the gameboard to 
   place their marker. Don’t forget the 
   logic that keeps players from playing 
   in spots that are already taken!
5. Think carefully about where each bit of 
   logic should reside. 
   Each little piece of functionality should 
   be able to fit in the game, 
   player or gameboard objects.. but take care 
   to put them in “logical” places. 
   Spending a little time brainstorming here 
   can make your life much easier later!
6. Build the logic that checks for when the 
   game is over! 
   Should check for 3-in-a-row and a tie.
7. Clean up the interface to allow players 
   to put in their names, 
   include a button to start/restart the 
   game and add a display element 
   that congratulates the winning player!
*/

const player = (username, sign) => {
  return { username, sign };
};

setPlayers();

function setPlayers() {
  let usernameOne = document.querySelector("#player-one").value;
  let usernameTwo = document.querySelector("#player-two").value;
  let playerOneChoice;
  let playerTwoChoice;
  let playerOneX = document.querySelector("#player-one-x");
  let playerOneO = document.querySelector("#player-one-o");
  let playerTwoX = document.querySelector("#player-two-x");
  let playerTwoO = document.querySelector("#player-two-o");
  let player1;
  let player2;
  playerOneX.addEventListener("click", (e) => {
    playerOneChoice = "X";
    playerTwoChoice = "O";
    e.target.style.backgroundColor = "lightgrey";
    playerOneO.style.backgroundColor = "white";
    playerTwoO.style.backgroundColor = "lightgrey";
    playerTwoX.style.backgroundColor = "white";
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerOneO.addEventListener("click", (e) => {
    playerOneChoice = "O";
    playerTwoChoice = "X";
    e.target.style.backgroundColor = "lightgrey";
    playerOneX.style.backgroundColor = "white";
    playerTwoX.style.backgroundColor = "lightgrey";
    playerTwoO.style.backgroundColor = "white";
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerTwoX.addEventListener("click", (e) => {
    playerTwoChoice = "X";
    playerOneChoice = "O";
    e.target.style.backgroundColor = "lightgrey";
    playerOneO.style.backgroundColor = "lightgrey";
    playerTwoO.style.backgroundColor = "white";
    playerOneX.style.backgroundColor = "white";
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerTwoO.addEventListener("click", (e) => {
    playerTwoChoice = "O";
    playerOneChoice = "X";
    e.target.style.backgroundColor = "lightgrey";
    playerTwoX.style.backgroundColor = "white";
    playerOneX.style.backgroundColor = "lightgrey";
    playerOneO.style.backgroundColor = "white";
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  return player1;
}
