function getComputerChoice() {
    let choice = getRandomInt(3);
    switch (choice) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    let choice;
    while (true) {
        choice = prompt("ROCK | PAPER | SCISSORS").toLowerCase();
        if (["rock", "paper", "scissors"].includes(choice)) {
            break;
        } else {
            alert("Invalid choice. Please enter ROCK, PAPER, or SCISSORS.");
        }
    }
    return choice;
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound() {
    const ComputerChoice = getComputerChoice();
    const HumanChoice = getHumanChoice();

    console.log(`Computer chose: ${ComputerChoice}`);
    console.log(`You chose: ${HumanChoice}`);

    if (ComputerChoice === HumanChoice) {
        console.log("It's a tie!");
    } else {
        switch (ComputerChoice) {
            case "rock":
                if (HumanChoice === "paper") {
                    HumanScore++;
                    console.log("You Won This Round");
                }
                else {
                    ComputerScore++;
                    console.log("Computer Won This Round");
                }
                break;
            case "paper":
                if (HumanChoice === "scissors") {
                    HumanScore++;
                    console.log("You Won This Round");
                }
                else {
                    ComputerScore++;
                    console.log("Computer Won This Round");
                }
                break;
            case "scissors":
                if (HumanChoice === "rock") {
                    HumanScore++;
                    console.log("You Won This Round");
                }
                else {
                    ComputerScore++;
                    console.log("Computer Won This Round");
                }
                break;
        }
    }

}


function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Human Score: ${HumanScore}`);
    console.log(`Computer Score: ${ComputerScore}`);
    if (HumanScore > ComputerScore) {
        console.log("YOU WIN");
    } else if (HumanScore < ComputerScore) {
        console.log("Computer Wins");
    } else {
        console.log("It's a tie overall!");
    }
}


// playRound();
playGame();