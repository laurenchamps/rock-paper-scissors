 //set options for play
const playOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector('div.result');
let playerScoreboard = document.querySelector('div.playerScore');
let computerScoreboard = document.querySelector('div.computerScore');


//Select a random option for the computer to play
function getComputerChoice () {
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

const btns = document.querySelectorAll('button');

btns.forEach(btn => btn.addEventListener('click', playGame));

function playGame(e) {
    const move = document.querySelector(`button#${e.target.id}`);
    const playerSelection = move.id;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
}

//Get result of player selection vs computer selection and return an alert 
// with the message of who won.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        resultDiv.textContent = 'It\'s a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultDiv.textContent = `You win. ${playerSelection} beats ${computerSelection}`;
        playerScore += 1;
        playerScoreboard.textContent = `Player: ${playerScore}`;
        if (playerScore === 5) {
            resultDiv.textContent = `GAME OVER. You win!`;
            btns.forEach(btn => btn.removeEventListener('click', playGame));
        };
    } else {
        resultDiv.textContent = `Computer wins. ${computerSelection} beats ${playerSelection}`;
        computerScore += 1;
        computerScoreboard.textContent = `Computer: ${computerScore}`;
        if (computerScore === 5) {
            resultDiv.textContent = 'GAME OVER. Computer wins.';
            btns.forEach(btn => btn.removeEventListener('click', playGame));
        }
    };
}