        const choice = ["rock", "paper", "scissors"];
        let userScore = 0;
        let comScore = 0;
        let userSelection = "";
        let messageString = ""
        let endGame = false;

        let imageChoice = document.querySelectorAll('img');
        const resultsMessage = document.createElement('p');
        const userMessage = document.createElement('p');
        const computerMessage = document.createElement('p');
        const finalScoreMessage = document.createElement('p');
        const replayButton = document.createElement('button');
        const user = document.querySelector('.user');
        const computer = document.querySelector('.computer');
        const results = document.querySelector('.results');

        message(userMessage, userScore, user)
        message(computerMessage, comScore, computer)

        imageChoice.forEach((chosenImage) => {

            // and for each one we add a 'click' listener
            chosenImage.addEventListener('click', () => {
            userSelection = chosenImage.alt;

            if (!endGame) {
                messageString += `${game()}\n`
                message(resultsMessage, messageString, results)
                message(userMessage, userScore, user)
                message(computerMessage, comScore, computer)
                endGame = userScore === 5 || comScore === 5
            }
            if (endGame) {
                endGame = false;
                score = 
                userScore > comScore ? `You Win! ${userScore} - ${comScore}` 
                : comScore > userScore ? `You Lose! ${userScore} - ${comScore}` 
                : `Draw! ${userScore} - ${comScore}`
                message(finalScoreMessage, score, results)
                message(replayButton, "Replay?", results)
            }
            });
        });

        

        replayButton.addEventListener('click', () => {
            userScore = 0;
            comScore = 0;
            gameCount = 0;
            userSelection = "";
            score = "";
            messageString = "";
            resultsMessage.remove()
            finalScoreMessage.remove()
            replayButton.remove()
            message(userMessage, userScore, user)
            message(computerMessage, comScore, computer)
        });

        function getComputerChoice() {
            let randomChoice = Math.floor(Math.random() * choice.length)
            return choice[randomChoice]
        }

        function playRound() {
            const computerSelection = getComputerChoice();
            
            return  userSelection === "rock" && computerSelection === "scissors"
            ||
            userSelection === "scissors" && computerSelection === "paper"
            ||
            userSelection === "paper" && computerSelection== "rock" 
            ? `You Win! ${userSelection} beats ${computerSelection}`
            : userSelection === computerSelection
            ? `Draw! You chose ${userSelection} computer chose ${computerSelection}`
            : `You Lose! ${computerSelection} beats ${userSelection}`
                 
        }

        function game() {
                let play = playRound()
                if (play.includes("Win!")) {
                    userScore++
                }
                else if (play.includes("Lose!")) {
                    comScore++
                }

                return play
        }

        function message(message, txtCnt , cls) {
            message.classList.add('message');
            message.textContent = txtCnt;
            cls.appendChild(message);
        }