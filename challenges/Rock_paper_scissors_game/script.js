const rock = document.getElementById("game__rock");
const paper = document.getElementById("game__paper");
const scissors = document.getElementById("game__scissors");
const your = document.getElementById("your__score");
const computer = document.getElementById("computer__score");
const empty = document.getElementById("game__empty__div");

let yourScore = 0;
let computerScore = 0;

function getRandomChoice() {
  const choice = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choice.length);
  const randomChoice = choice[randomIndex];
  return randomChoice;
}

function startGame(yourChoice, computerChoice) {
  if (
    (yourChoice === "rock" && computerChoice === "rock") ||
    (yourChoice === "paper" && computerChoice === "paper") ||
    (yourChoice === "scissors" && computerChoice === "scissors")
  ) {
    return (empty.innerText = "Is a tie!");
  } else if (
    (yourChoice === "rock" && computerChoice === "scissors") ||
    (yourChoice === "scissors" && computerChoice === "paper") ||
    (yourChoice === "paper" && computerChoice == "rock")
  ) {
    yourScore++;
    your.innerText = yourScore;
    return (empty.innerText = "You win!");
  }
  computerScore++;
  computer.innerText = computerScore;
  return (empty.innerText = "You lose!");
}

rock.addEventListener("click", function () {
  startGame("rock", getRandomChoice());
});

paper.addEventListener("click", function () {
  startGame("paper", getRandomChoice());
});

scissors.addEventListener("click", function () {
  startGame("scissors", getRandomChoice());
});
