
let HumanScore = 0; // Declare global variables
let ComputerScore = 0;
let roundCount = 0; // Track the number of rounds

const result = document.querySelector("#result");
const pc_picked = document.querySelector("#pc_picked");
const user = document.querySelector("#button_container");
const play = document.querySelector("#playAgain");

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

function playRound(HumanChoice) {
    if (roundCount >= 5) {
        return; // Stop the game after 5 rounds
    }

    const ComputerChoice = getComputerChoice();
    pc_picked.textContent = `Computer picked: ${ComputerChoice}`; // Fix textContent usage

    if (ComputerChoice === HumanChoice) {
        result.textContent = "TIED"; // Overwrite result content
    } else {
        switch (ComputerChoice) {
            case "rock":
                if (HumanChoice === "paper") {
                    HumanScore++;
                    result.textContent = "You Won This Round";
                } else {
                    ComputerScore++;
                    result.textContent = "Computer Won This Round";
                }
                break;
            case "paper":
                if (HumanChoice === "scissors") {
                    HumanScore++;
                    result.textContent = "You Won This Round";
                } else {
                    ComputerScore++;
                    result.textContent = "Computer Won This Round";
                }
                break;
            case "scissors":
                if (HumanChoice === "rock") {
                    HumanScore++;
                    result.textContent = "You Won This Round";
                } else {
                    ComputerScore++;
                    result.textContent = "Computer Won This Round";
                }
                break;
        }
        roundCount++; // Increment the round count
    }


    // Display scores
    result.append(` | Human Score: ${HumanScore}, Computer Score: ${ComputerScore}`);

    // Check if the game is over
    if (roundCount === 5) {
        if (HumanScore > ComputerScore) {
            result.textContent = "You Won the Game!";
            alert("You Won the Game!");
        } else if (HumanScore < ComputerScore) {
            result.textContent = "Computer Won the Game!";
            alert("Computer Won the Game!");

        } else {
            result.textContent = "It's a Tie Overall!";
        }
    }
}

// Event listener for user input
user.addEventListener("click", (event) => {
    let target = event.target;

    switch (target.id) {
        case "rock":
            playRound("rock");
            break;
        case "paper":
            playRound("paper");
            break;
        case "scissors":
            playRound("scissors");
            break;
    }
});


play.addEventListener("click", () => {
    HumanScore = 0;
    ComputerScore = 0;
    roundCount = 0;
    result.textContent = "";
    pc_picked.textContent = "";
});