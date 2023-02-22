function getComputerChoice () {
    
    //set options for play
    const playOptions = ['Rock', 'Paper', 'Scissors'];
    
    //get random index value
    const randomIndex = Math.floor(Math.random() * playOptions.length);

    //get random item
    return playOptions[randomIndex];
}

function getPlayerChoice() {
    let playerChoice = prompt(`Please select 'rock', 'paper' or 'scissors'`);

    if (playerChoice.toLowerCase() === 'rock') {
        playerChoice = 'Rock';
    } else if (playerChoice.toLowerCase() === 'paper') {
        playerChoice = 'Paper';
    } else if (playerChoice.toLowerCase() === 'scissors') {
        playerChoice = 'Scissors';
    } else if (playerChoice.toLowerCase() !== 'rock' || 'paper' || 'scissors') {
        alert('Please re-load the page and enter your value again')
    } else {
        alert('Something went wrong');
    }
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

//Get result of player selection vs computer selection and return an alert with the message of who won.
function playRound(playerSelection, computerSelection) {
    let result;

    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        result = `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}`;
        playerScore += 1;
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        result =  `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
        computerScore += 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        result =  `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
        playerScore += 1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        result = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
        computerScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        result =  `You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
        playerScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        result = `You lose! ${computerSelection} beats ${playerSelection.toLowerCase()}.`;
        computerScore += 1;
    } else if (playerSelection === computerSelection) {
        result = 'It\'s a tie!'
    } else {
        result = 'Something went wrong'
    }

    return result;
}

//Play 5 rounds of game
function game() {
for (let i = 0; i < 5; i++) {
    // Input player selection
    const playerSelection = getPlayerChoice();
    
    //Get one of the three play options (rock, paper or scissors) at random for computer's play
    const computerSelection = getComputerChoice();

    const currentRound = playRound(playerSelection, computerSelection);

    console.log(`You played ${playerSelection.toLowerCase()} and computer played ${computerSelection.toLowerCase()}.`);
    console.log(currentRound);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
    }
}
  
game();

let finalResult;

if (playerScore > computerScore) {
    finalResult = 'You are the champion!';
} else if (playerScore < computerScore) {
    finalResult = 'Outwitted by a machine, eh? Better luck next time.'
} else {
    finalResult = 'It\'s all square at the end of the game. Everyone wins!';
}

console.log(finalResult);