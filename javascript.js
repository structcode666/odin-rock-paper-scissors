function firstLetterUpperCase (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function getComputerChoice(){
    let computerChoice
    let randomNumber = Math.random()
    if (randomNumber<=0.33) {
        computerChoice = "Rock"
        // console.log("Rock")
    } else if (randomNumber>0.33 && randomNumber<=0.66){
        computerChoice = "Scissors"
        // console.log("Scissors")
    } else {
        computerChoice = "Paper"
        // console.log("Paper")
    }
    return computerChoice
}

function getHumanChoice(){
    let humanChoice
    do{
        humanChoice = window.prompt("Type Rock, Paper or Scissors");
        if ((firstLetterUpperCase(humanChoice) !== "Rock") && (firstLetterUpperCase(humanChoice) !== "Scissors") && (firstLetterUpperCase(humanChoice) !== "Paper")){
            console.log("Invalid input, try again");
        }
    }
    while ((firstLetterUpperCase(humanChoice) !== "Rock") && (firstLetterUpperCase(humanChoice) !== "Scissors") && (firstLetterUpperCase(humanChoice) !== "Paper"));

    return firstLetterUpperCase(humanChoice)
}

function checkWinner(computerChoice, humanChoice){
    if ((computerChoice == "Rock" && humanChoice == "Scissors") || (computerChoice == "Paper" && humanChoice == "Rock") || (computerChoice == "Scissors" && humanChoice == "Paper")) {
        return "Computer"
    } else if (computerChoice==humanChoice){
        return "Tie"
    }  else {
        return "Human"
    }
}


function playRound(computerChoice, humanChoice) {

    oneRound = checkWinner(computerChoice, humanChoice);
    if(oneRound == "Tie"){ 
        console.log("Its a tie!");
    } else if (oneRound == "Computer"){
        console.log("You lose, the computer wins");
    } else if (oneRound == "Human") {
        console.log("You Win!")
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let computerChoice;
    let humanChoice;
    
    for( let i=0; i< 5; i++){
        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        console.log(`The computer's choice is ${computerChoice} and your choice is ${humanChoice}`);
        playRound(computerChoice, humanChoice);
        if (checkWinner(computerChoice, humanChoice) == "Computer"){
            ++computerScore;
        } else if (checkWinner(computerChoice, humanChoice) == "Human"){
            ++humanScore;
        }
    }

    return `The computer's score is ${computerScore}, your score is ${humanScore} `
}


console.log(playGame())

