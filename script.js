function rpsGame() {
  let playerScore = 0
  let pcScore = 0
  
  function playRound() {
    
    const choices = ["R", "P", "S"];
    const pcChoice = choices[Math.floor(Math.random() * choices.length)];

    let playerChoice = prompt("Type 'R' for Rock, 'P' for Paper, or 'S' for Scissors")
    if(playerChoice == 'R') {
      console.log(choices[0])
    } else if(playerChoice == 'P'){
      console.log(choices[1]);
    } else if(playerChoice == 'S'){
      console.log(choices[2]) 
    } else {
      console.log("That is not a valid choice.")
    }

    if(playerChoice == 'R' && pcChoice == 'R'){
      console.log('The Computer chose Rock')
      console.log("It's a tie!")
    } else if(playerChoice == 'R' && pcChoice == 'S'){
        console.log('The computer chose Scissors')
        console.log("You Win! Rock beats Scissors!")
        playerScore += 1
    } else if(playerChoice == 'R' && pcChoice == 'P'){
        console.log("The computer chose Paper")
        console.log("You Lose! Paper beats Rock!")
        pcScore += 1
    } else if(playerChoice == 'P' && pcChoice == 'P'){
        console.log("The computer chose Paper")
        console.log("It's a tie!")
    }   
      else if(playerChoice == 'P' && pcChoice == 'S'){
        console.log('The computer chose Scissors')
        console.log("You Lose! Scissors beats Paper!")
        pcScore += 1
    } else if(playerChoice == 'P' && pcChoice == 'R'){
        console.log('The Computer chose Rock')
        console.log("You Win! Rock beats Paper!")
        playerScore += 1
    } else if(playerChoice == 'S' && pcChoice == 'S'){
        console.log('The computer chose Scissors')
        console.log("It's a tie!")
    } else if(playerChoice == 'S' && pcChoice == 'R'){
        console.log('The computer chose Rock')
        console.log("You Lose! Rock beats Scissors")
        pcScore += 1
    } else if(playerChoice == 'S' && pcChoice == 'P'){
        console.log("The computer chose Paper")
        console.log('You Win! Scissors beats Paper!')
        playerScore += 1
    }
    console.log(playerScore)
    console.log(pcScore)
    
  }

  

  /*while (playerScore < 5 && pcScore < 5){
    playRound()
  }*/

}

