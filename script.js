const player = (username, sign) => {
  return { username, sign };
};

changeLanguage();

function changeLanguage() {
  let select = document.querySelector("#lang");
  select.addEventListener("change", (e) => {
    if (e.target.value === "ru") {
      document
        .querySelectorAll(".square")
        .forEach((square) => (square.textContent = ""));
      document.querySelector("h1").textContent = "Крестики-нолики";
      document.querySelector("#player-one").placeholder = "Игрок 1";
      document.querySelector("#player-two").placeholder = "Игрок 2";
      document.querySelector("#start").textContent = "Начать";
      document.querySelector(".rule-one").textContent =
        "Введите имена игроков, выберите 'X' или 'O' и нажмите 'Начать'.";
      document.querySelector(".rule-two").textContent = "Игрок 1 ходит первым.";
    } else {
      document
        .querySelectorAll(".square")
        .forEach((square) => (square.textContent = ""));
      document.querySelector("h1").textContent = "Tic Tac Toe";
      document.querySelector("#player-one").placeholder = "Player 1";
      document.querySelector("#player-two").placeholder = "Player 2";
      document.querySelector("#start").textContent = "Play";
      document.querySelector(".rule-one").textContent =
        "Enter your nicknames, choose 'X' or 'O' and press 'Play'.";
      document.querySelector(".rule-two").textContent =
        "Player 1 makes the first move.";
    }
  });
}

setPlayerMark();

function setPlayerMark() {
  let count;
  let playerOneChoice;
  let playerTwoChoice;
  let playerOneX = document.querySelector("#player-one-x");
  let playerOneO = document.querySelector("#player-one-o");
  let playerTwoX = document.querySelector("#player-two-x");
  let playerTwoO = document.querySelector("#player-two-o");
  let player1;
  let player2;
  let usernameOne;
  let usernameTwo;
  playerOneX.addEventListener("click", (e) => {
    usernameOne = document.querySelector("#player-one").value;
    usernameTwo = document.querySelector("#player-two").value;
    count = 0;
    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    playerOneChoice = "X";
    playerTwoChoice = "O";
    setMark(e.target, playerTwoO, playerOneO, playerTwoX);
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerOneO.addEventListener("click", (e) => {
    usernameOne = document.querySelector("#player-one").value;
    usernameTwo = document.querySelector("#player-two").value;
    count = 0;
    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    playerOneChoice = "O";
    playerTwoChoice = "X";

    setMark(e.target, playerTwoX, playerOneX, playerTwoO);
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerTwoX.addEventListener("click", (e) => {
    usernameOne = document.querySelector("#player-one").value;
    usernameTwo = document.querySelector("#player-two").value;
    count = 0;
    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    playerTwoChoice = "X";
    playerOneChoice = "O";

    setMark(e.target, playerOneO, playerOneX, playerTwoO);
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  playerTwoO.addEventListener("click", (e) => {
    usernameOne = document.querySelector("#player-one").value;
    usernameTwo = document.querySelector("#player-two").value;
    count = 0;
    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    playerTwoChoice = "O";
    playerOneChoice = "X";

    setMark(e.target, playerOneX, playerOneO, playerTwoX);
    player1 = player(usernameOne, playerOneChoice);
    player2 = player(usernameTwo, playerTwoChoice);
  });
  document.querySelector("#start").addEventListener("click", (e) => {
    count = 0;

    document
      .querySelectorAll(".square")
      .forEach((square) => (square.textContent = ""));
    document.querySelector(".message").style.display = "none";
    if (document.querySelector("#lang").value === "en") {
      document.querySelector(".rule-one").textContent = "The game is on!";
      document.querySelector(".rule-two").textContent = "";
    } else if (document.querySelector("#lang").value === "ru") {
      document.querySelector(".rule-one").textContent = "Игра началась!";
      document.querySelector(".rule-two").textContent = "";
    }
    let squares = Array.from(document.querySelectorAll(".square"));
    squares.forEach((div) => {
      div.addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          count++;

          if (count % 2 !== 0) {
            e.target.textContent = player1.sign;
          } else {
            e.target.textContent = player2.sign;
          }
        }
        checkResult(squares, player1, player2);
      });
      document.querySelector(".again").addEventListener("click", (e) => {
        console.log(player1, player2);
        e.target.parentElement.style.display = "none";
        document
          .querySelectorAll(".square")
          .forEach((square) => (square.textContent = ""));
        count = 0;
      });
    });
  });
}

function setMark(target, one, two, three) {
  target.style.backgroundColor = "lightgrey";
  one.style.backgroundColor = "lightgrey";
  two.style.backgroundColor = "white";
  three.style.backgroundColor = "white";
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
    if (document.querySelector("#lang").value === "en") {
      document.querySelector(".result").textContent = "It's a draw.";
      document.querySelector(".winner").textContent = "";
      document.querySelector(".again").textContent = "Play again";
    } else {
      document.querySelector(".result").textContent = "Ничья.";
      document.querySelector(".winner").textContent = "";
      document.querySelector(".again").textContent = "Играть снова";
    }
  }
  document.querySelector(".close").addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
}

function announceWinner(p) {
  let message = document.querySelector(".message");
  let result = document.querySelector(".result");
  let winner = document.querySelector(".winner");
  let close = document.querySelector(".close");
  message.style.display = "flex";
  if (document.querySelector("#lang").value === "en") {
    result.textContent = "Congratulations!";
    winner.textContent = p.username + " is the winner.";
    document.querySelector(".again").textContent = "Play again";
  } else {
    result.textContent = "Поздравляю!";
    winner.textContent = "Игрок " + p.username + " победил.";
    document.querySelector(".again").textContent = "Играть снова";
  }
  close.addEventListener("click", (e) => {
    e.target.parentElement.style.display = "none";
  });
}
