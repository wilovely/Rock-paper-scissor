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

//function that plays a single round of Rock Paper Scissors. The function have two parameters
function playRound(playerSelection, computerSelection) {
    console.log("player chose " + playerSelection + " Computer chose " + computerSelection);

    if(playerSelection==="paper" && computerSelection==="rock"){
        console.log("you win!");
    }else if(playerSelection==="scissor"&& computerSelection==="paper"){
        console.log("you win!");
    }else if(playerSelection==="rock"&& computerSelection==="scissor"){
        console.log("you win!");
    }else if(playerSelection===computerSelection){
        console.log("its a draw!");
    }else{
        console.log("you lose!");
    }
}

//create a prompt for player to enter and made input to case insensitive
const playerSelection = prompt("enter rock paper or scissor").toLowerCase();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);