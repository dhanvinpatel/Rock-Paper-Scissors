const splashScreen = document.querySelector(".welcome-screen");
const userOption = document.querySelectorAll(".option");
const displayUserChoice = document.querySelector(".display-user");
const displayComputerChoice = document.querySelector(".display-computer");
const userScore = document.querySelector(".user-score");
const computerScore = document.querySelector(".computer-score");
const userChoiceImg = document.createElement("img");
const computerChoiceImg = document.createElement("img");

const playerChoice = ["rock", "paper", "scissors"];
let userChoice;
let computerChoice;
let userPoint = 0;
let computerPoint = 0;


// Add class to hide welcome screen after 2 seconds
if (splashScreen !== null) {
    document.addEventListener('DOMContentLoaded', (event) => {
        setTimeout(() => {
            splashScreen.classList.add('screen-hide');
        }, 2000);
    });
}

// Display user choice to screen
userOption.forEach(option => option.addEventListener('click', (e) => {
    userChoiceImg.src = e.target.src;
    userChoiceImg.style.width = '80%';
    displayUserChoice.appendChild(userChoiceImg);
    userChoice = e.target.parentElement.classList[0];
    randomComputerChoice();
    compareChoice();
    userScore.innerText = userPoint;
    computerScore.innerText = computerPoint;
}));

// Generate random computer choice and display to screen
function randomComputerChoice() {
    const randomNumber = Math.floor(Math.random() * playerChoice.length);
    const randomChoice = playerChoice[randomNumber];
    computerChoice = randomChoice;
    computerChoiceImg.src = `images/${computerChoice}-right.png`;
    computerChoiceImg.style.width = '80%';
    computerChoiceImg.style.float = "right";
    displayComputerChoice.appendChild(computerChoiceImg);
}

// Compare user and computer choice
function compareChoice() {
    switch (userChoice+computerChoice) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            alert("Tie");
            break;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            alert("You win");
            userPoint++;
            break
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            alert("Computer win");
            computerPoint++;
            break;
    }
}