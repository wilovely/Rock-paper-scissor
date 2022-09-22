//create a random choice function for rock paper scissor 
function getComputerChoice() {
    let num = Math.round(Math.random() * 2 + 1);
    console.log(num);
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

//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters
function playRound(playerSelection, computerSelection) {
    console.log("player chose " + playerSelection + " Computer chose " + computerSelection);


}

//create a prompt for player to enter
const playerSelection = prompt("enter rock paper or scissor");
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);