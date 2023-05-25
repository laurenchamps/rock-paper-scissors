 //set options for play
const playOptions = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector('div.result');


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
    let result;

    if (playerSelection === computerSelection) {
        resultDiv.textContent = 'It\'s a tie';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        resultDiv.textContent = 'You win!';
        playerScore += 1;
    } else {
        resultDiv.textContent = 'Computer wins';
        computerScore += 1;
    };
}

// function game() {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();

//     playRound(playerSelection, computerSelection);
//     console.log(`Player: ${playerScore}`);
//     console.log(`Computer: ${computerScore}`);
// }



// //Play 5 rounds of game
// // function game() {
// //  {
// //     // // Input player selection
// //     // const playerSelection = getPlayerChoice();
    
// //     // //Get one of the three play options (rock, paper or scissors) at 
//     // //random for computer's play
//     // const computerSelection = getComputerChoice();

//     // const currentRound = playRound(playerSelection, computerSelection);

    
//     // console.log(currentRound);
// //     console.log(`Player: ${playerScore}`);
// //     console.log(`Computer: ${computerScore}`);
// //     }
// // }
  
// // game();

// // let finalResult;

// // if (playerScore > computerScore) {
// //     finalResult = 'You are the champion!';
// // } else if (playerScore < computerScore) {
// //     finalResult = 'Outwitted by a machine, eh? Better luck next time.'
// // } else {
// //     finalResult = 'It\'s all square at the end of the game. Everyone wins!';
// // }

// // console.log(finalResult);