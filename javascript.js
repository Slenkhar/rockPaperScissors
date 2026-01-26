// ::: Rock Paper Scissors Console Game :::

// ::: Computer Choice Function :::
function getComputerChoice() {
  let choice = Math.random();
  if (choice <= 0.33) {
    return "rock";
  } else if (choice <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

// ::: Human Choice Function :::
function getHumanChoice() {
  let choice = prompt(
    "What will it be, Rock, Paper or Scissors?: ",
  ).toLowerCase();
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log(`There's no such thing as ${choice} in Rock Paper Scissors !`);
    return getHumanChoice();
  } else {
    return choice;
  }
}

// ::: Score variables :::
let humanScore = 0;
let computerScore = 0;

// ::: One Game Round function :::
function playRound(computerChoice, humanChoice) {
  if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else if (humanChoice === "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    } else {
      console.log(`It's a tie, you both chose ${humanChoice}`);
    }
  }
  if (computerChoice === "paper") {
    if (humanChoice === "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else if (humanChoice === "rock") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    } else {
      console.log(`It's a tie, you both chose ${humanChoice}`);
    }
  }
  if (computerChoice === "scissors") {
    if (humanChoice === "rock") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      ++humanScore;
    } else if (humanChoice === "paper") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      ++computerScore;
    } else {
      console.log(`It's a tie, you both chose ${humanChoice}`);
    }
  }
}

// ::: Multiple Round Function :::
function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }
  console.log(`You scored: ${humanScore}. Computer scored: ${computerScore}`);
}

playGame();
