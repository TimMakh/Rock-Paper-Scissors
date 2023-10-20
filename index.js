let computerPoints = 0;
let playerPoints = 0;
let computerScore = document.querySelector(".computer__score");
let playerScore = document.querySelector(".player__score");
let playerSelection = "";
let rockBtn = document.querySelector(".buttons__item--rock");
let paperBtn = document.querySelector(".buttons__item--paper");
let scissorsBtn = document.querySelector(".buttons__item--scissors");
let info = document.querySelector(".score__info");

function getComputerChoice() {
  let optionArray = ["Rock", "Paper", "Scissors"];
  let randomIndex = Math.floor(Math.random() * optionArray.length);
  let randomElem = optionArray[randomIndex];
  return randomElem;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    info.innerText = "Draw choose again";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    info.innerText = "You Lose this round :(";
    computerPoints++;
    computerScore.innerText = "Computer: " + computerPoints;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    info.innerText = "You Lose this round :(";
    computerPoints++;
    computerScore.innerText = "Computer: " + computerPoints;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    info.innerText = "You Lose this round :(";
    computerPoints++;
    computerScore.innerText = "Computer: " + computerPoints;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    info.innerText = "You won this round!";
    playerPoints++;
    playerScore.innerText = "Player: " + playerPoints;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    info.innerText = "You won this round!";
    playerPoints++;
    playerScore.innerText = "Player: " + playerPoints;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    info.innerText = "You won this round!";
    playerPoints++;
    playerScore.innerText = "Player: " + playerPoints;
  }
}

rockBtn.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  playRound("Rock", computerSelection);
});

paperBtn.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  playRound("Paper", computerSelection);
});

scissorsBtn.addEventListener("click", function () {
  let computerSelection = getComputerChoice();
  playRound("Scissors", computerSelection);
});
