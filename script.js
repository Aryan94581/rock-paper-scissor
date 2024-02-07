let computerMove;

let result = "";
const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loose: 0,
  ties: 0,
};
function scoreboard() {
  if (result === "win!") {
    score.wins += 1;
  } else if (result === "loose!") {
    score.loose += 1;
  } else if (result === "tie!") {
    score.ties += 1;
  }
}

displayResult();
Result_p();

function playGame(PlayerMove) {
  if (PlayerMove === "scissors") {
    pickComputerChoice();

    if (computerMove === "rock") {
      result = "loose!";
    } else if (computerMove === "paper") {
      result = "win!";
    } else {
      result = "tie!";
    }
    scoreboard();
  } else if (PlayerMove === "paper") {
    pickComputerChoice();

    if (computerMove === "rock") {
      result = "win!";
    } else if (computerMove === "paper") {
      result = "tie!";
    } else {
      result = "loose!";
    }
    scoreboard();
  } else if (PlayerMove === "rock") {
    pickComputerChoice();

    if (computerMove === "rock") {
      result = "tie!";
    } else if (computerMove === "paper") {
      result = "loose!";
    } else {
      result = "win!";
    }
    scoreboard();
  }
  localStorage.setItem("score", JSON.stringify(score));
  displayResult();
  Result_p();
  CompairMove(PlayerMove);
}

function pickComputerChoice() {
  randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }
}

function displayResult() {
  document.querySelector(
    ".Score-p"
  ).innerHTML = ` wins = ${score.wins}, loose = ${score.loose}, tie = ${score.ties}`;
}

function Result_p() {
  document.querySelector(".result-p").innerHTML = `Its a ${result}`;
}

function CompairMove(PlayerMove) {
  document.querySelector(".compairMoves").innerHTML = `your
<img src="${PlayerMove}-emoji.png" class="Move-img" />
<img src="${computerMove}-emoji.png" class="Move-img" />
computer`;
}

function Resetvalues() {
  score.wins = 0;
  score.loose = 0;
  score.ties = 0;
  localStorage.removeItem("score");
  displayResult();
  Result_p();
}