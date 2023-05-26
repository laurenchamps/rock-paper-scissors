let playerScore = 0;
let computerScore = 0;

const rpsBtns = document.querySelectorAll('.rpsBtn');
let resultDiv = document.querySelector('div.result');
let playerScoreboard = document.querySelector('.playerScore');
let computerScoreboard = document.querySelector('.computerScore');
const winModal = document.querySelector('dialog.playerWins');
const loseModal = document.querySelector('dialog.computerWins');
const playAgain = document.querySelectorAll('.reload');

//Select a random option for the computer to play
function getComputerChoice () {
    const playOptions = ['Rock', 'Paper', 'Scissors'];
    return computerSelection = playOptions[Math.floor(Math.random() * playOptions.length)];
}

// Play game
function playGame() {
    //Set event listeners on all buttons
    rpsBtns.forEach(btn => btn.addEventListener('click', () => {
        const playerSelection = btn.id;
        const computerSelection = getComputerChoice();

        // Call playRound function
        playRound(playerSelection, computerSelection);
    }));
}

//Get result of player selection vs computer selection, update and display score.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection.toLowerCase()) {
        resultDiv.textContent = 'It\'s a tie.';
    } else if (
        (playerSelection === 'rock' && computerSelection.toLowerCase() === 'scissors') || 
        (playerSelection === 'paper' && computerSelection.toLowerCase() === 'rock') || 
        (playerSelection === 'scissors' && computerSelection.toLowerCase() === 'paper')
    ) {
        resultDiv.textContent = `You win. ${playerSelection.charAt(0).toUpperCase() 
            + playerSelection.slice(1)} beats ${computerSelection.toLowerCase()}.`;
        playerScore += 1;
        playerScoreboard.textContent = `Player: ${playerScore}`;
    } else {
        resultDiv.textContent = `Computer wins. ${computerSelection} beats ${playerSelection}.`;
        computerScore += 1;
        computerScoreboard.textContent = `Computer: ${computerScore}`;
    };
    finalResult(playerScore, computerScore);
}

// When player or computer reaches 5 points, display modal and end game
function finalResult (playerScore, computerScore) {
       if (playerScore === 5) {
        winModal.showModal();
        gameOver();
    } else if (computerScore === 5) {
        loseModal.showModal();
        gameOver();
    };

    // Reload page if 'Play again' clicked
    playAgain.forEach(play => play.addEventListener('click', () => {
        window.location.reload();
    }));
}

// Disable buttons when game ends
function gameOver () {
    rpsBtns.forEach(btn => btn.disabled = true);
}

// Call playGame and finalResult functions
playGame();
finalResult();