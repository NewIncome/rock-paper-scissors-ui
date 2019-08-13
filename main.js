(function() {
    document.addEventListener('DOMContentLoaded', function() {
        let startButton = document.querySelector('#game > button');
        let gameButtons = document.querySelectorAll('#game > div button');
        let playerChoice = document.querySelector('#game td:first-of-type');
        let computerChoice = document.querySelector('#game td:last-of-type');
        const choices = ['rock', 'paper', 'scissors'];
        let winner = false;
        let playerScoreElement = document.querySelector('#scores td:first-of-type');
        let computerScoreElement = document.querySelector('#scores td:nth-of-type(2)');
        let playerScore = 0, computerScore = 0;
        let computerPlay = function() {
            let randomIndex = Math.round(Math.random() * 2);
            let computerChoice = choices[randomIndex];
            return computerChoice;
        }
        let addOneToPlayer = function() {
            playerScore++;
            playerScoreElement.innerText = playerScore.toString();
        }
        let addOneToComputer = function() {
            computerScore++;
            computerScoreElement.innerText = computerScore.toString();
        }
        let playRound = function(computerChoice, playerChoice) {
            if (computerChoice == 'rock' && playerChoice == 'scissors') {
                addOneToComputer();
            } else if (computerChoice == 'rock' && playerChoice == 'paper') {
                addOneToPlayer();
            } else if (computerChoice == 'paper' && playerChoice == 'scissors') {
                addOneToPlayer();
            } else if (computerChoice == 'paper' && playerChoice == 'rock') {
                addOneToComputer();
            } else if (computerChoice == 'scissors' && playerChoice == 'paper') {
                addOneToComputer();
            } else if (computerChoice == 'scissors' && playerChoice == 'rock') {
                addOneToPlayer();
            }
        }
        gameButtons.forEach(button => {
            button.addEventListener('click', pickWeapon);
        });
        function pickWeapon(e) {
            e.preventDefault();
            switch(this.innerText) {
                case 'ROCK':
                    playerChoice.innerText = 'rock';
                    break;
                case 'PAPER':
                    playerChoice.innerText = 'paper';
                    break;
                case 'SCISSORS':
                    playerChoice.innerText = 'scissors';
                    break;
            }
            computerChoice.innerText = computerPlay();
            playRound(computerChoice.innerText, playerChoice.innerText);
        }
        startButton.addEventListener('click', startGame);
        function startGame(e) {
            e.preventDefault();
            this.setAttribute('disabled', 'true');
            this.style.opacity = '0.5';
            gameButtons.forEach(button => {
                button.style.opacity = '1';
                button.removeAttribute('disabled');
            });
        }
    });
})();
