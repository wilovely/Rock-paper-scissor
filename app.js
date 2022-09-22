let player = 0;
let computer = 0;
let draw = 0;

//create a random choice function for rock paper scissor 
function getComputerChoice() {
    let num = Math.round(Math.random() * 2 + 1);
    var choose = "";
    switch (num) {
        case 1: var choose = "rock";
            break;

        case 2: var choose = "paper";
            break;

        case 3: var choose = "scissor";
            break;
    }
    return choose;
}

//function that plays a single round of Rock Paper Scissors. The function have two parameters
function playRound(playerSelection, computerSelection) {
    console.log("You choose " + playerSelection + " Computer choose " + computerSelection);

    if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("you win!");
        player = ++player;
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        console.log("you win!");
        player = ++player;
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        console.log("you win!");
        player = ++player;
    } else if (playerSelection === computerSelection) {
        console.log("its a draw!");
        draw = ++draw;
    } else {
        console.log("you lose!");
        computer = ++computer;
    }
}

function game() {

    for (let i = 0; i < 5; i++) {
        //created a prompt for player to enter and made input to case insensitive
        const playerSelection = prompt("enter rock paper or scissor").toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    //show score numbers
    console.log(" player score: " + player + "\n computer score: " + computer + "\n draw: " + draw + "\n you lose!");
}
game();
