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

setPlayerMark();

function start(p1, p2) {
  let usernameOne;
  let usernameTwo;
  let player1;
  let player2;
  document.querySelector("#start").addEventListener("click", (e) => {
    usernameOne = document.querySelector("#player-one").value;
    usernameTwo = document.querySelector("#player-two").value;
    player1 = player(usernameOne, p1);
    player2 = player(usernameTwo, p2);
    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    game(player1, player2);
    console.log([player1, player2]);
  });
}

function setPlayerMark() {
  let playerOneChoice;
  let playerTwoChoice;
  let playerOneX = document.querySelector("#player-one-x");
  let playerOneO = document.querySelector("#player-one-o");
  let playerTwoX = document.querySelector("#player-two-x");
  let playerTwoO = document.querySelector("#player-two-o");
  playerOneX.addEventListener("click", (e) => {
    playerOneChoice = "X";
    playerTwoChoice = "O";
    setMark(e.target, playerTwoO, playerOneO, playerTwoX);
    start(playerOneChoice, playerTwoChoice);
  });
  playerOneO.addEventListener("click", (e) => {
    playerOneChoice = "O";
    playerTwoChoice = "X";
    setMark(e.target, playerTwoX, playerOneX, playerTwoO);
    start(playerOneChoice, playerTwoChoice);
  });
  playerTwoX.addEventListener("click", (e) => {
    playerTwoChoice = "X";
    playerOneChoice = "O";
    setMark(e.target, playerOneO, playerOneX, playerTwoO);
    start(playerOneChoice, playerTwoChoice);
  });
  playerTwoO.addEventListener("click", (e) => {
    playerTwoChoice = "O";
    playerOneChoice = "X";
    setMark(e.target, playerOneX, playerOneO, playerTwoX);
    start(playerOneChoice, playerTwoChoice);
  });
}

function setMark(target, one, two, three) {
  target.style.backgroundColor = "lightgrey";
  one.style.backgroundColor = "lightgrey";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "white";
}

function game(p1, p2) {
  let count = 0;
  let squares = document.querySelectorAll(".square");
  squares.forEach((div) => {
    div.addEventListener("click", (e) => {
      if (e.target.textContent === "") {
        count++;
        if (count % 2 !== 0) {
          e.target.textContent = p1.sign;
        } else {
          e.target.textContent = p2.sign;
        }
      }
      checkResult();
    });
  });
}

/*

xxx...
...xxx...
... ...xxx
x..x..x..
.x..x..x.
..x..x..x
x...x...x
..x.x.x..


let gameboard = ["X", "O", "X", "X", "X", "O", "X", "O", "O"];
const board = document.querySelectorAll(".square");
for (let i = 0; i < 10; i++) {
  board[i].textContent = gameboard[i];
}

*/
