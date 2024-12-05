const rock = document.querySelector('#Rock');
const paper = document.querySelector('#Paper');
const scissors = document.querySelector('#Scissors');
const results = document.querySelector("#results")
let computerScore = document.querySelector("#computer-score");
let humanScore = document.querySelector("#human-score");
let computerScoreCount = 0;
let humanScoreCount = 0;



rock.addEventListener('click', function(){
    let result = playRound(getComputerChoice(), "Rock")[0];
    updateScore();
    results.textContent = `The result is : ${result}`})

paper.addEventListener('click', function(){
    let result = playRound(getComputerChoice(), "Paper")[0];
    updateScore();
    results.textContent = `The result is : ${result}`})

scissors.addEventListener('click', function(){
    let result = playRound(getComputerChoice(), "Scissors")[0];
    updateScore();
    results.textContent = `The result is : ${result}`})




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

    if (computerScoreCount ==5 || humanScoreCount==5){
        if (computerScoreCount ==5){
            return ["Game over, the computer wins", null];
        }else if (humanScoreCount ==5){
            return ["Game over, You win!", null];}
        } else{
            oneRound = checkWinner(computerChoice, humanChoice);
            if(oneRound == "Tie"){ 
                return ["Its a tie!", null];
            } else if (oneRound == "Computer"){
                return ["You lose, the computer wins",computerScoreCount++];
            } else if (oneRound == "Human") {
                return ["You Win!", humanScoreCount++]
            }
        }

    }

    


function updateScore(){
    computerScore.textContent = computerScoreCount;
    humanScore.textContent = humanScoreCount;
}

// function playGame() {
//     let computerScore = 0;
//     let humanScore = 0;
//     let computerChoice;
//     let humanChoice;
    
//     for( let i=0; i< 5; i++){
//         computerChoice = getComputerChoice();
//         humanChoice = getHumanChoice();
//         console.log(`The computer's choice is ${computerChoice} and your choice is ${humanChoice}`);
//         playRound(computerChoice, humanChoice);
//         if (checkWinner(computerChoice, humanChoice) == "Computer"){
//             ++computerScore;
//         } else if (checkWinner(computerChoice, humanChoice) == "Human"){
//             ++humanScore;
//         }
//     }

//     return `The computer's score is ${computerScore}, your score is ${humanScore} `
// }


// function getHumanChoice(){
//     let humanChoice
//     do{
//         humanChoice = window.prompt("Type Rock, Paper or Scissors");
//         if ((firstLetterUpperCase(humanChoice) !== "Rock") && (firstLetterUpperCase(humanChoice) !== "Scissors") && (firstLetterUpperCase(humanChoice) !== "Paper")){
//             console.log("Invalid input, try again");
//         }
//     }
//     while ((firstLetterUpperCase(humanChoice) !== "Rock") && (firstLetterUpperCase(humanChoice) !== "Scissors") && (firstLetterUpperCase(humanChoice) !== "Paper"));

//     return firstLetterUpperCase(humanChoice)
// }





// console.log(playGame())

