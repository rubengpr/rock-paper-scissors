const computerSelection = document.getElementById("computer-selection")
const computerButton = document.getElementById("computer-button")


function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        computerSelection.textContent = choices[randomIndex];
    }

computerButton.addEventListener("click", getComputerChoice)