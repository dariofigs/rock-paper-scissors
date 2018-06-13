//  VARIBLES
let computerChoices = ["r", "p", "s"];

let win = "You win! 🎉"
let lose = "The computers have taken over 🤖"
let draw = "You tied... 🙃"

let rock = document.getElementById('rock')
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let resultLabel = document.querySelector('.result')
let tryAgain = document.querySelector('.try-again')

let userGuess
let computerGuess
let result

//  WHEN PAGE LOADS
window.onload = function() {

    //GAME POSSIBILITIES
    function resultWin() {
        resultLabel.innerHTML = win
        resultLabel.classList.add('visible')
    }
    function resultLose() {
        resultLabel.innerHTML = lose
        resultLabel.classList.add('visible')
    }
    function resultDraw() {
        resultLabel.innerHTML = draw
        resultLabel.classList.add('visible')
    }

    //  ROCK PAPER SCISSORS
    rock.onclick = function(){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

        if (computerGuess == "s") {
            resultWin()
        } else if (computerGuess == "p") {
            resultLose()
        } else if (computerGuess == "r") {
            resultDraw()
        }
    }
    paper.onclick = function(){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

        if (computerGuess == "r") {
            resultWin()
        } else if (computerGuess == "s") {
            resultLose()
        } else if (computerGuess == "p") {
            resultDraw()
        }
    }
    scissors.onclick = function(){
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]

        if (computerGuess == "p") {
            resultWin()
        } else if (computerGuess == "r") {
            resultLose()
        } else if (computerGuess == "s") {
            resultDraw()
        }
    }
}