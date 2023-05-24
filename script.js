 //set options for play
const playOptions = ['rock', 'paper', 'scissors'];

//Select a random option for the computer to play
function getComputerChoice () {
    return playOptions[Math.floor(Math.random() * playOptions.length)];
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', e => {
    if (e.target.id === 'rock') {
        console.log('rock');
    } else if (e.target.id === 'paper') {
        console.log('paper');
    } else if (e.target.id === 'scissors') {
        console.log('scissors');
    }
}));

// function getPlayerChoice(e) {
//     // let choice = document.querySelector(`#${e.srcElement.id}`);
//     if (e.target.id === 'rock');
//     return 'rock';
// }

// const playerSelection = getPlayerChoice();
// console.log(playerSelection);
// const computerSelection = getComputerChoice();
// console.log(computerSelection);

// let playerScore = 0;
// let computerScore = 0;

// //Get result of player selection vs computer selection and return an alert 
// // with the message of who won.
// function playRound(playerSelection, computerSelection) {
//     let result;

//     if (playerSelection === computerSelection) {
//         result = console.log('Tie');
//     } else if (
//         (playerSelection === 'rock' && computerSelection === 'scissors') || 
//         (playerSelection === 'paper' && computerSelection === 'rock') || 
//         (playerSelection === 'scissors' && computerSelection === 'paper')
//     ) {
//         result = console.log('Player wins');
//         playerScore += 1;
//     } else {
//         result = console.log('Computer wins');
//         computerScore += 1;
//     };
//     return result;
// }

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