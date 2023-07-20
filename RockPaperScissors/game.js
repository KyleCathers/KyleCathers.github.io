let compScore = 0;
let humanScore = 0;

const playAgainButton = document.querySelector('.playAgain');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const messageText = document.querySelector('.message');
const scoreText = document.querySelector('.score');

rockButton.addEventListener('click', rockListen, true);
paperButton.addEventListener('click', paperListen, true);
scissorsButton.addEventListener('click', scissorsListen, true);
playAgainButton.addEventListener('click', playListener, true);

// returns a random answer of either rock, paper, or scissors
function getComputerChoice() {
    const max = 3; // 3 choices
    let number = Math.floor(Math.random() * max); // 0, 1, 2
    if (number == 0) {
        return 'rock';
    } else if (number == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// plays 1 round taking in the players choice and the computers choice
function playRound(playerSelection, computerSelection) {
    let winner;

    // rock > scissors
    // scissors > paper
    // paper > rock

    // compare inputs
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            winner = 'The round is a draw!';
        } else if (computerSelection == 'paper') {
            winner = 'You lose! Paper beats rock';
            compScore++;
        } else if (computerSelection == 'scissors') {
            winner = 'You win! Rock beats scissors';
            humanScore++;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            winner = 'You win! Paper beats rock';
            humanScore++;
        } else if (computerSelection == 'paper') {
            winner = 'The round is a draw!';
        } else if (computerSelection == 'scissors') {
            winner = 'You lose! Scissors beats paper';
            compScore++;
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            winner = 'You lose! Rock beats scissors';
            compScore++;
        } else if (computerSelection == 'paper') {
            winner = 'You win! Scissors beats paper';
            humanScore++;
        } else if (computerSelection == 'scissors') {
            winner = 'The round is a draw!';
        }
    }

    messageText.textContent = winner;
    scoreText.textContent = `Score: ${humanScore} (You) - ${compScore} (Robot)`;

    if ((humanScore == 5) || (compScore == 5)) {
        messageText.textContent = `Game over, you ${humanScore == 5 ? 'win' : 'lose'}!`;
        playAgainButton.style.visibility = 'visible';
    }
}

function rockListen() {
    console.log('Rock pressed');
    if(!((humanScore == 5) || (compScore == 5))) {
        playRound('rock', getComputerChoice());
        console.log('poop');
    }
}

function paperListen() {
    console.log("Paper pressed");
    if(!((humanScore == 5) || (compScore == 5))) {
        playRound('paper', getComputerChoice());
    }
}

function scissorsListen() {
    console.log("Scissors pressed");
    if(!((humanScore == 5) || (compScore == 5))) {
        playRound('scissors', getComputerChoice());
    }
}

function playListener() {
    console.log("Play again pressed");
    compScore = 0;
    humanScore = 0;
    playAgainButton.style.visibility = 'hidden';
    scoreText.textContent = "Select a choice to begin!";
    messageText.textContent = "";
}