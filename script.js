const computerSelection = document.getElementById("computer-selection")
const computerButton = document.getElementById("computer-button")
const humanSelection = document.getElementById("human-selection")
const humanButtons = document.querySelectorAll(".human-button")
const hScore = document.getElementById("human-score")
const cScore = document.getElementById("computer-score")

let humanScore = 0
let computerScore = 0



function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        computerSelection.textContent = choices[randomIndex];
    }

computerButton.addEventListener("click", getComputerChoice)

function selectedOption(event) {
    const clickedButton = event.target.textContent
    humanSelection.textContent = "You selected " + clickedButton
}

humanButtons.forEach(button => {
    button.addEventListener("click", selectedOption)
})