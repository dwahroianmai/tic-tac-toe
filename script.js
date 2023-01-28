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
    document.querySelector(".message").style.display = "none";
    game(player1, player2);
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
  let squares = Array.from(document.querySelectorAll(".square"));
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
      checkResult(squares, p1, p2);
    });
  });
}

function checkResult(items, p1, p2) {
  if (items.slice(0, 3).every((elem) => elem.textContent === p1.sign)) {
    announceWinner(p1);
  } else if (items.slice(3, 6).every((elem) => elem.textContent === p1.sign)) {
    announceWinner(p1);
  } else if (items.slice(6).every((elem) => elem.textContent === p1.sign)) {
    announceWinner(p1);
  } else if (items.slice(0, 3).every((elem) => elem.textContent === p2.sign)) {
    announceWinner(p2);
  } else if (items.slice(3, 6).every((elem) => elem.textContent === p2.sign)) {
    announceWinner(p2);
  } else if (items.slice(6).every((elem) => elem.textContent === p2.sign)) {
    announceWinner(p2);
  } else if (
    items[0].textContent === p1.sign &&
    items[3].textContent === p1.sign &&
    items[6].textContent === p1.sign
  ) {
    announceWinner(p1);
  } else if (
    items[1].textContent === p1.sign &&
    items[4].textContent === p1.sign &&
    items[7].textContent === p1.sign
  ) {
    announceWinner(p1);
  } else if (
    items[2].textContent === p1.sign &&
    items[5].textContent === p1.sign &&
    items[8].textContent === p1.sign
  ) {
    announceWinner(p1);
  } else if (
    items[0].textContent === p2.sign &&
    items[3].textContent === p2.sign &&
    items[6].textContent === p2.sign
  ) {
    announceWinner(p2);
  } else if (
    items[1].textContent === p2.sign &&
    items[4].textContent === p2.sign &&
    items[7].textContent === p2.sign
  ) {
    announceWinner(p2);
  } else if (
    items[2].textContent === p2.sign &&
    items[5].textContent === p2.sign &&
    items[8].textContent === p2.sign
  ) {
    announceWinner(p2);
  } else if (
    items[0].textContent === p1.sign &&
    items[4].textContent === p1.sign &&
    items[8].textContent === p1.sign
  ) {
    announceWinner(p1);
  } else if (
    items[0].textContent === p2.sign &&
    items[4].textContent === p2.sign &&
    items[8].textContent === p2.sign
  ) {
    announceWinner(p2);
  } else if (
    items[2].textContent === p1.sign &&
    items[4].textContent === p1.sign &&
    items[6].textContent === p1.sign
  ) {
    announceWinner(p1);
  } else if (
    items[2].textContent === p2.sign &&
    items[4].textContent === p2.sign &&
    items[6].textContent === p2.sign
  ) {
    announceWinner(p2);
  } else if (items.every((elem) => elem.textContent !== "")) {
    document.querySelector(".message").style.display = "flex";
    document.querySelector(".result").textContent = "It's a draw.";
    document.querySelector(".close").addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
    });
  }
}

function announceWinner(p) {
  let message = document.querySelector(".message");
  let result = document.querySelector(".result");
  let winner = document.querySelector(".winner");
  let close = document.querySelector(".close");
  message.style.display = "flex";
  result.textContent = "Congratulations!";
  winner.textContent = p.username + " is the winner.";
  close.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
}
