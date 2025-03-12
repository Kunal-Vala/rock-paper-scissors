// alert("PLAY NOW");

function getComputerChoice(){
    let choice = getRandomInt(3)
    // console.log(choice)
    switch(choice){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log(getComputerChoice())

let choice = prompt("ROCK | PAPER | SCISSOR");
function getHumanChoice(choice){
    choice = choice.toLowerCase();
    console.log(choice)
}

getHumanChoice(choice);