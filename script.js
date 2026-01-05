let humanScore = 0;
let computerScore = 0;


let computerChoice;



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

function playRound(humanChoice, computerChoice) {

    const overallResults = document.querySelector(".overallResults");
    const dispComChoice = document.querySelector(".comChoice");
    const roundResults = document.querySelector(".roundResults");
    const scores = document.querySelector(".scores");
    computerChoice = getComputerChoice();
    dispComChoice.textContent = `The computer chose ${computerChoice}.`;

    console.log("The computer chose " + computerChoice);

    gameLogic(humanChoice, computerChoice, roundResults);

    if (computerScore == 5) {
        overallResults.removeChild(dispComChoice);
        overallResults.removeChild(roundResults);
        scores.textContent = `COMPUTER WINS, ${computerScore} - ${humanScore}!`;
    }
    else if (humanScore == 5) {
        scores.textContent = `YOU WIN, ${humanScore} - ${computerScore}!`;
    }

    else {
        scores.textContent = `HUMAN: ${humanScore} ROBOT: ${computerScore}`;
        // overallResults.appendChild(dispComChoice);
        // overallResults.appendChild(roundResults);
        // overallResults.appendChild(scores);
        console.log(`Scores are, human: ${humanScore} and robot: ${computerScore}`);
    }

}

function gameLogic(humanChoice, computerChoice, roundResults) {
     if (humanChoice === computerChoice) {
        roundResults.textContent = `Tie! No points given.`
        console.log("Tie!")
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        roundResults.textContent = `YOU WIN! Rock beats scissors!`
        console.log("You win, rock beats scissors!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        roundResults.textContent = `YOU WIN! Paper beats rock!`
        console.log("You win, paper beats rock!")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        roundResults.textContent = `YOU WIN! Scissors beat paper!`
        humanScore++;
        console.log("You win, scissors beat paper!")
    }
    else {
        roundResults.textContent = `You lose... ${computerChoice} beats ${humanChoice}!`;
        computerScore++;
        console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener( "click", () => playRound("rock", computerChoice) );
paper.addEventListener( "click", () => playRound("paper", computerChoice) );
scissors.addEventListener( "click", () => playRound("scissors", computerChoice) );



// playGame();






