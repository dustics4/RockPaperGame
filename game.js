 //Function getComputerChoice, will have to have an array with Rock, Paper , Scissors.
        //This fucntion will have to pick a random string from the array
        // 

        //Function PlayRound
        // playerSelection is Rock , how to know what  the computer selection will be if its random
        // If player selection is == computerSelection , it is a draw
        // If player selection is 'Rock' and computerSelection is 'Paper' = Computer wins
        // If player selection is 'Rock' and computerSelection is 'Scissors' = Player wins

        var playerScore = 0; computerScore = 0; roundNumber = 0; playerDraw = 0;

        let playerSelection;
        let computerSelection;


        let buttons = document.querySelectorAll(".button");


        

        
        function getComputerChoice(){
            let computerArray = ['rock' , 'paper' , 'scissors'];
            let pickRandom = computerArray[Math.floor(Math.random()* computerArray.length)]
            return pickRandom;
        }

    
                // This function calculates if the player wins or computer, player wins each time if turns out like this
                function playRound(playerSelection, computerSelection) {
                    // your code here!
                    if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                        (playerSelection === 'scissors' && computerSelection === 'paper') ||
                        (playerSelection === 'paper' && computerSelection === 'rock')){
                        playerScore++;
                        return `You Win! ${playerSelection} beats ${computerSelection}`;
                    } else if ((computerSelection === 'rock' && playerSelection === 'scissors') ||
                    (computerSelection === 'scissors' && playerSelection === 'paper') ||
                    (computerSelection === 'paper' && playerSelection === 'rock')) {
                        computerScore++;
                        return `You lose! ${computerSelection} beats ${playerSelection}`;
                    } else if (playerSelection === computerSelection){
                        playerDraw++;
                        return "Draw!";
                    } else {
                        console.log("Try again!");
                    }
                }

                
           

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    playerSelection = button.textContent.toLowerCase();
                    roundNumber++;
                     //Define what computerChoice is, randomly generated from "Rock" , "Paper", "Scissors"
                    const computerSelection = getComputerChoice();
                    //Will show what button is pressed e.g if Rock, show Rock
                    playerLbl.innerHTML = "Player: " + playerSelection;
                   
                    
                    //Will display what the computer has generated
                    computerLbl.innerHTML = "Computer: " + computerSelection;

                    //Will run the playRound to show who has won
                    winLbl.innerHTML = playRound(playerSelection, computerSelection);
                    //Shows the score at the end
                    scoreLbl.innerHTML = "Player: " + playerScore + " || Computer: " + computerScore + "|| Draw: " + playerDraw;
                    roundNo.innerHTML = "Round: " + roundNumber;
                    
                    console.log("Your score is " + playerScore);
                    console.log("Computer score is " + computerScore)

                    //if score gets to 5 show winner , end game
                    if(playerScore === 5) {
                        youWin.innerHTML = "Player Wins!";
                    }else if (computerScore == 5) {
                        compWin.innerHTML = "Computer Wins! "
                    } else{
                        console.log("Try Again!");
                    }
                    
                })
            })
        

       