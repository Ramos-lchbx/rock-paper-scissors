let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let range = (Math.floor(Math.random() * 3) + 1);
    if (range === 1) {
        return "rock"
    }
    else if (range === 2) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let option = prompt("Choose! Rock, paper or scissors?")
        return option.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log("The computer chose " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("Tie!")
        return
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win, rock beats scissors!")
        return
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win, paper beats rock!")
        return "You win, paper beats rock!"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win, scissors beat paper!")
        return
    }
    else {
        computerScore++;
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
        return
    }
}

function nextRound() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log("Scores are, Human: " + humanScore + ", and Robot: " + computerScore);
}

function playGame() {
    nextRound();
    nextRound();
    nextRound();
    nextRound();
    nextRound();    
}

let humanChoice;
let computerChoice;

// console.log("The computer chose " + computerChoice);
playGame();
// console.log("Scores are, Human: " + humanScore + ", and Robot: " + computerScore);






