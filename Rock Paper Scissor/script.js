let computerChoiceDisplay = document.getElementById('computer-choice')
let userChoiceDisplay = document.getElementById('user-choice')
let choices = document.querySelectorAll('button')
let resultDisplay = document.getElementById('result')
let userChoice
let computerChoice
let cohice

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceGenerate()
    getResult()
}))

function computerChoiceGenerate() {
    const randomNumber = Math.floor(Math.random() * 3 + 1)

    if (randomNumber === 1) {
        computerChoice = "Rock"
    }
    if (randomNumber === 2) {
        computerChoice = "Paper"
    }
    if (randomNumber === 3) {
        computerChoice = "Scissor"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
    }
    if (computerChoice === 'Rock' && userChoice === "Paper") {
        result = 'you win!'
    }
    if (computerChoice === 'Rock' && userChoice === "Scissor") {
        result = 'you lost!'
    }
    if (computerChoice === 'Paper' && userChoice === "Scissor") {
        result = 'you win!'
    }
    if (computerChoice === 'Paper' && userChoice === "Rock") {
        result = 'you lose!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Rock") {
        result = 'you win!'
    }
    if (computerChoice === 'Scissors' && userChoice === "Paper") {
        result = 'you lose!'
    }
    resultDisplay.innerHTML = result
}


