const computerSelection = document.getElementById("computer-selection")
const computerButton = document.getElementById("computer-button")
const infoHumanSelection = document.getElementById("p-human-selection")
const humanButtons = document.querySelectorAll(".human-button")
const hScore = document.getElementById("human-score")
const cScore = document.getElementById("computer-score")
const result = document.getElementById("p-result")

let humanScore = 0
let computerScore = 0


function humanWins() {
    result.textContent = "Human wins!"
    humanScore++
    hScore.textContent = "Human score: " + humanScore
}

function computerWins() {
    result.textContent = "Computer wins!"
    computerScore++
    cScore.textContent = "Computer score: " + computerScore
}


function getComputerChoice() {
        const choices = ["Rock", "Paper", "Scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        computerSelection.textContent = choices[randomIndex];
        playRound()
    }

function getHumanChoice(event) {
    const humanSelection = event.target.textContent
    infoHumanSelection.textContent = humanSelection
    computerButton.removeAttribute("disabled")
}

function playRound() {
    if (infoHumanSelection.textContent === computerSelection.textContent) {
        result.textContent = "It's a draw!"
    } else if (infoHumanSelection.textContent === "Rock" && computerSelection.textContent === "Paper") {
        computerWins()
    } else if (infoHumanSelection.textContent === "Rock" && computerSelection.textContent === "Scissors") {
        humanWins()
    }  else if (infoHumanSelection.textContent === "Paper" && computerSelection.textContent === "Rock") {
        humanWins()
    }  else if (infoHumanSelection.textContent === "Paper" && computerSelection.textContent === "Scissors") {
        computerWins()
    }  else if (infoHumanSelection.textContent === "Scissors" && computerSelection.textContent === "Rock") {
        computerWins()
    }  else if (infoHumanSelection.textContent === "Scissors" && computerSelection.textContent === "Paper") {
        humanWins()
    } else {
        result.textContent = "No data"
    }
}

humanButtons.forEach(button => {
    button.addEventListener("click", getHumanChoice)
})

computerButton.addEventListener("click", getComputerChoice)