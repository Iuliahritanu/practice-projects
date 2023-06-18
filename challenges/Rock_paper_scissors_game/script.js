// const gameRock = document.querySelector("#game__rock");
// const gamePaper = document.querySelectorAll("#game__paper");
// const gameScissors = document.querySelectorAll("#game__scissors");
// const gameEmptyDiv = document.querySelectorAll("#game__empty__div");
// const gameYourScore = document.querySelectorAll("#your__score");
// const gameComputerScore = document.querySelectorAll("#computer__score");

// function getRandomChoice() {
//   let randomChoice = "#";
//   for (let i = 1; i <= 3; i++) {
//     const random = Math.floor(Math.random() * choice.length);
//     randomChoice = randomChoice + choice.substring(random + random + 1);
//   }
//   return randomChoice;
// }
// function game(p1, p2) {
//   p1 = gameRock;
//   p2 = getRandomChoice();
//   if (p1 === p2) {
//     gameEmptyDiv.innerText = "you win";
//   }
// }
// gameRock.addEventListerner("click", game());
// gamePaper.addEventListerner("click");
// gameScissors.addEventListerner("click");

// console.log(getRandomChoice());
// const gameEmptyDiv = "";
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
    return (empty.innerHTML = "is a tie!");
  } else if (
    (yourChoice === "rock" && computerChoice === "scissors") ||
    (yourChoice === "scissors" && computerChoice === "paper") ||
    (yourChoice === "paper" && computerChoice == "rock")
  ) {
    yourScore++;
    your.innerHTML = yourScore;
    return (empty.innerHTML = "you win!");
  }
  computerScore++;
  computer.innerHTML = computerScore;
  return (empty.innerHTML = "you lose!");
}

// function result() {
//   if (yourChoice > 0 && yourChoice > 0) {
//     yourScore++;
//     computerScore++;
//     empty.innerText = yourScore;
//   }
// }

rock.addEventListener("click", function () {
  startGame("rock", getRandomChoice());
});

paper.addEventListener("click", function () {
  startGame("paper", getRandomChoice());
});

scissors.addEventListener("click", function () {
  startGame("scissors", getRandomChoice());
});

// rock.addEventListener('click', function(yourScore, computerScore){
//     if(yourScore>0 && computerScore>0){
//        yourScore++
//        computerScore++
//        yourScore.innerText=

//     }

// })
