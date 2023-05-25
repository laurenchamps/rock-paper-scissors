 //set options for play
const playOptions = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

const rpsBtns = document.querySelectorAll('.rpsBtn');
let resultDiv = document.querySelector('div.result');
let playerScoreboard = document.querySelector('.playerScore');
let computerScoreboard = document.querySelector('.computerScore');


//Select a random option for the computer to play
function getComputerChoice () {
    return computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
}

function playGame() {
    rpsBtns.forEach(btn => btn.addEventListener('click', () => {
        const playerSelection = btn.id;

        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    }));
}

//Get result of player selection vs computer selection and return an alert 
// with the message of who won.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection.toLowerCase()) {
        resultDiv.textContent = 'It\'s a tie.';
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') || 
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') || 
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        resultDiv.textContent = `You win. ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}.`;
        playerScore += 1;
        playerScoreboard.textContent = `Player: ${playerScore}`;
    } else {
        resultDiv.textContent = `Computer wins. ${computerSelection} beats ${playerSelection}.`;
        computerScore += 1;
        computerScoreboard.textContent = `Computer: ${computerScore}`;
    };
    finalResult(playerScore, computerScore);
}

function finalResult (playerScore, computerScore) {
    const winModal = document.querySelector('dialog.playerWins');
    const loseModal = document.querySelector('dialog.computerWins');
    const playAgain = document.querySelectorAll('.reload');

    if (playerScore === 5) {
        winModal.showModal();
        gameOver();
    } else if (computerScore === 5) {
        loseModal.showModal();
        loseModal.style.backgroundColor = '#D9230D';
        gameOver();
    };

    playAgain.forEach(play => play.addEventListener('click', () => {
        window.location.reload();
    }));
}

function gameOver () {
    rpsBtns.forEach(btn => btn.disabled = true);
}

playGame();
finalResult();