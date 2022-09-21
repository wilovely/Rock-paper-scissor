getComputerChoice();

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
    return console.log(`computer chose ${choose}`);
}