 //Function getComputerChoice, will have to have an array with Rock, Paper , Scissors.
        //This fucntion will have to pick a random string from the array
        // 

        //Function PlayRound
        // playerSelection is Rock , how to know what  the computer selection will be if its random
        // If player selection is == computerSelection , it is a draw
        // If player selection is 'Rock' and computerSelection is 'Paper' = Computer wins
        // If player selection is 'Rock' and computerSelection is 'Scissors' = Player wins
        let playerscore = 0;
        let computerscore = 0;
        //  Randomises the array. Picks Rock or paper or scissors

        function getComputerChoice(){
            let computerArray = ['Rock' , 'Paper' , 'Scissors'];
            let pickRandom = computerArray[Math.floor(Math.random()* computerArray.length)]
            return pickRandom;
        }

        function game() {
                // Function that plays rock paper scissors. Adds a point each to player or computer if they won.
                function playRound(playerSelection, computerSelection) {
                // your code here!
                if (playerSelection === 'Rock' && computerSelection === 'Scissors'){
                    playerscore++;
                    return "You Win! Rock beats Scissors";
                    

                } else if (playerSelection === 'Rock' && computerSelection ==='Rock'){
                    return "Draw!";

                } else if (playerSelection === 'Rock' && computerSelection ==='Paper'){
                    computerscore++;
                    return "You Lose! Paper beats Rock";
                    
                } else if (playerSelection === 'Scissors' && computerSelection ==='Paper'){
                    playerscore++;
                    return "You Win! Scissors beats Paper";
                   
                } else if (playerSelection === 'Scissors' && computerSelection ==='Rock'){
                    computerscore++;
                    return "You Lose! Rock beats Scissors";
                    
                } else if (playerSelection === 'Scissors' && computerSelection ==='Scissors'){
                    return "Draw!";

                } else if (playerSelection === 'Paper' && computerSelection ==='Paper'){
                    return "Draw!";

                } else if (playerSelection === 'Paper' && computerSelection ==='Rock'){
                    playerscore++;
                    return "You Win! Paper beats Rock";
                    
                } else if (playerSelection === 'Paper' && computerSelection ==='Scissors'){
                    computerscore++;
                    return "You Lose! Scissors beats Paper";
                    
                }

                else {
                    console.log("Try again!");
                }
            }

            
            // plays the functions, and prints out what output/result.
            return console.log(playRound(playerSelection, computerSelection))
            
        }

        
        
        const playerSelection = prompt("Game Starts! Pick your 'Rock' , 'Paper or 'Scissors : ");
        const computerSelection = getComputerChoice();
         
        
        game();
        //Shows player score and computer score.
        console.log("This is the player total :", playerscore);
        console.log("This is the computer score :", computerscore);