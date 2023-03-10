function rpsGame() {
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
  } else if(playerChoice == 'R' && pcChoice == 'P'){
      console.log("The computer chose Paper")
      console.log("You Lose! Paper beats Rock!")
  } else if(playerChoice == 'P' && pcChoice == 'P'){
      console.log("The computer chose Paper")
      console.log("It's a tie!")
  }   
    else if(playerChoice == 'P' && pcChoice == 'S'){
      console.log('The computer chose Scissors')
      console.log("You Lose! Scissors beats Paper!")
  } else if(playerChoice == 'P' && pcChoice == 'R'){
      console.log('The Computer chose Rock')
      console.log("You Win! Rock beats Paper!")
  } else if(playerChoice == 'S' && pcChoice == 'S'){
      console.log('The computer chose Scissors')
      console.log("It's a tie!")
  } else if(playerChoice == 'S' && pcChoice == 'R'){
      console.log('The computer chose Rock')
      console.log("You Lose! Rock beats Scissors")
  } else if(playerChoice == 'S' && pcChoice == 'P'){
      console.log("The computer chose Paper")
      console.log('You Win! Scissors beats Paper!')
  }
  
}
rpsGame()



