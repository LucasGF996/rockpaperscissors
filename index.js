const pickOptions = 3;
let computerChoice;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * pickOptions);
    switch (randomNum) {
        case 0: 
            computerChoice = 'rock';
            console.log(`Computer choice: ${computerChoice}`);
            break;
        case 1:
            computerChoice = 'paper';
            console.log(`Computer choice: ${computerChoice}`);
            break;
        case 2: 
            computerChoice = 'scissors';
            console.log(`Computer choice: ${computerChoice}`);
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("What is your choice? Rock, Paper or Scissors?").toLowerCase();
    if (choice == 'rock' || choice == 'paper' || choice == 'scissors') {
        humanChoice = choice;
        console.log(`Your choice: ${humanChoice}`);
    } else {
        return "Pick rock, paper or scissors please!";
    }
}

function playRound() {
    getComputerChoice();
    getHumanChoice();
    checkWinner(computerChoice, humanChoice);

    function checkWinner(pcPick, humanPick) {
        switch (true) {
            //Draw
            case pcPick == 'rock' && humanPick == 'rock':
            case pcPick == 'paper' && humanPick == 'paper':
            case pcPick == 'scissors' && humanPick == 'scissors':
                console.log(`It's a DRAW! Human ${humanScore} and pc ${computerScore}`);
                break;
            //Computer wins
            case pcPick == 'rock' && humanPick == 'scissors':
            case pcPick == 'scissors' && humanPick == 'paper':
            case pcPick == 'paper' && humanPick == 'rock':
                computerScore += 1;
                console.log(`Computer wins! Computer score: ${computerScore} and Human score: ${humanScore}`);
                break;
            //Human wins
            case humanPick == 'rock' && pcPick == 'scissors':
            case humanPick == 'scissors' && pcPick == 'paper':
            case humanPick == 'paper' && pcPick == 'rock':
                humanScore += 1;
                console.log(`Human wins! Human score: ${humanScore} and Computer score: ${computerScore}`);
                break;
            default:
                console.log(`Not gonna do shit, this is default`);
        }
    }    
}