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
        return "Tie!"
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win, rock beats scissors!"
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win, paper beats rock!"
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win, scissors beat paper!"
    }
    else {
        computerScore++;
        return "You lose, " + computerChoice + " beats " + humanChoice + "!"
    }
}

function playGame() {
    playRound(humanChoice, computerChoice);
    getHumanChoice();
    getComputerChoice();
    playRound(humanChoice, computerChoice);
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// console.log("The computer chose " + computerChoice);
playGame();
// console.log("Scores are, Human: " + humanScore + ", and Robot: " + computerScore);






