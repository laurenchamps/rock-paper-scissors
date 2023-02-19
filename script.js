function getComputerChoice (arr) {

    //get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    //get random item
    const item = arr[randomIndex];

    return item;
}

const plays = ['rock', 'paper', 'scissors'];

getComputerChoice(plays);

console.log(getComputerChoice(plays));