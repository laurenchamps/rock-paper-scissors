function getComputerChoice (arr) {

    //get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    //get random item
    const item = arr[randomIndex];
    
    console.log(item);

    return item;
}

const playOptions = ['rock', 'paper', 'scissors'];

//Get one of the three play options (rock, paper or scissors) at random for computer's play
const computerSelection = getComputerChoice(playOptions);

//Get result of player selection vs computer selection and return an alert with the message of who won.
function result(playerSelection, computerSelection) {

    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert('You win! Rock beats scissors');
    } else if (playerSelection === 'rock' && computerSelection ==='paper') {
        alert('You lose! Paper beats rock.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win! Scissors beats paper')
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose! Rock beats scissors')
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win! Paper beats rock')
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose! Scissors beats paper')
    } else if (playerSelection === computerSelection) {
        alert('It\'s a tie!')
    } else {
        alert('Something went wrong')
    }
}

//Input player selection
const playerSelection = playOptions[0];

//Run one round of game
result(playerSelection, computerSelection);
