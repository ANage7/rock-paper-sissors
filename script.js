//Getting computer choice
function getComputerChoice(){
    let i = Math.random();
    let computerAnswer;
    //console.log(i);
    if (i > 0.66){
        computerAnswer ="rock";
       
        return computerAnswer;
    

    } else if (i > 0.33){
        computerAnswer ="paper"; 
       
        return computerAnswer;

    }else{
        computerAnswer ="scissors";
       
        return computerAnswer;
        
    }; 
};

//console.log(getComputerChoice());

//Getting Human Choice
function getHumanChoice(){
    let humanChoice = prompt("Please, Choose Rock, Paper or Sissors");
    //humanChoice = humanChoice.toLowerCase();
    return humanChoice;
};

//console.log(getHumanChoice());

//Keeping Score
let humanScore = 0;
let computerScore =0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toUpperCase();
    computerChoice.toUpperCase();
    if (humanChoice === "rock" && computerChoice === "scissors"){
        //console.log("human wins");
        humanScore+=1;
    } else if (computerChoice === "rock" && humanChoice === "scissors"){
        //console.log("computer wins")
        computerScore+=1
    } else if (humanChoice === "paper" && computerChoice === "rock"){
        //console.log("human wins");
        humanScore+=1;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        //console.log("Computer wins");
        computerScore+=1;
    } else if (humanChoice === "scissors" && computerChoice === "paper"){
        //console.log("human wins");
        humanScore+=1;
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
        //console.log("Computer wins");
        computerScore+=1;
    }else if (humanChoice === computerChoice){
        //console.log("Its a Tie!");
    };
    return humanScore, computerScore;
    
    
};





function playGame(){

    
   

    for(let i =1; i <= 5 ; i++){
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
    }

    console.log("human Score is: " + humanScore);
    console.log("Computer Score is: "+ computerScore);
    if (humanScore > computerScore){
        console.log("Human Wins");
    }else if (computerScore === humanScore){
        console.log("It's a Tie");    

    }else{
        console.log("Computer wins");
    }
    

};

playGame()


    
