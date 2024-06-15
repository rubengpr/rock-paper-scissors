const computerSelection = document.getElementById("computer-selection")
const computerButton = document.getElementById("computer-button")
const infoHumanSelection = document.getElementById("p-human-selection")
const humanButtons = document.querySelectorAll(".human-button")
const hScore = document.getElementById("human-score")
const cScore = document.getElementById("computer-score")
const result = document.getElementById("p-result")
const resultBox = document.getElementById("result-box")
const modal = document.getElementById("modal")
const resetGameButton = document.getElementById("playanothergame-button")


let humanScore = 0
let computerScore = 0


function humanWins() {
    result.textContent = "Human wins"
    humanScore++
    hScore.textContent = humanScore
}

function computerWins() {
    result.textContent = "Computer wins"
    computerScore++
    cScore.textContent = computerScore
}

function playRound() {
    if (infoHumanSelection.textContent === computerSelection.textContent) {
        result.textContent = "It's a draw"
    } else if (infoHumanSelection.textContent === "✊" && computerSelection.textContent === "✋") {
        computerWins()
    } else if (infoHumanSelection.textContent === "✊" && computerSelection.textContent === "✌️") {
        humanWins()
    }  else if (infoHumanSelection.textContent === "✋" && computerSelection.textContent === "✊") {
        humanWins()
    }  else if (infoHumanSelection.textContent === "✋" && computerSelection.textContent === "✌️") {
        computerWins()
    }  else if (infoHumanSelection.textContent === "✌️" && computerSelection.textContent === "✊") {
        computerWins()
    }  else if (infoHumanSelection.textContent === "✌️" && computerSelection.textContent === "✋") {
        humanWins()
    } else {
        result.textContent = "No data"
    }
}

function getComputerChoice() {
        const choices = ["✊", "✋", "✌️"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        computerSelection.textContent = choices[randomIndex];
        playRound()
        
        const playAgainButton = document.createElement("button")
        playAgainButton.setAttribute("id", "playagain-button")
        playAgainButton.textContent = "Play again"
        resultBox.appendChild(playAgainButton)
        

        humanButtons.forEach(button => {
            button.setAttribute("disabled", "true")
        })
        computerButton.setAttribute("disabled", "true")

        playAgainButton.addEventListener("click", playAgain)

        showWinner()
    }

function getHumanChoice(event) {
    const humanSelection = event.target.textContent
    infoHumanSelection.textContent = humanSelection
    computerButton.removeAttribute("disabled")
}

function playAgain() {
    //Enable both human and computer buttons
    humanButtons.forEach(button => {
        button.removeAttribute("disabled")
    })

    //Reset p values, both for human and computer selections
    infoHumanSelection.textContent = "❔"
    computerSelection.textContent = "❔"
    result.textContent = ""

    const playAgainButton = document.getElementById("playagain-button")
    if (playAgainButton) {
        playAgainButton.remove()
    }
}

humanButtons.forEach(button => {
    button.addEventListener("click", getHumanChoice)
})

computerButton.addEventListener("click", getComputerChoice)

function showWinner() {
    if (humanScore === 5 || computerScore === 5) {
        modal.style.display = "block";
    }
}

function playAnotherGame() {
    modal.style.display = "none"
    humanScore = 0
    computerScore = 0
    hScore.textContent = humanScore
    cScore.textContent = computerScore
}

resetGameButton.addEventListener("click", playAnotherGame)