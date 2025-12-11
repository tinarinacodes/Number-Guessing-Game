let input = document.querySelector("#input");
let output = document.querySelector("#output");
let chances = document.querySelector("#chances");

let gameWon = false;
let chancesLeft = 10;
let mysteryNumber = Math.floor(Math.random() * 101); 

let button = document.querySelector("button");
button.addEventListener("click", checkGuess);

chances.innerHTML = "Chances: " + chancesLeft;

function checkGuess(){
    let playersGuess = parseInt(input.value.trim());
  
    if(isNaN(playersGuess) || playersGuess < 0 || playersGuess > 100){
       output.innerHTML = "Please enter a number from 0 to 100";
    }else{
        playGame(playersGuess);
    }
    
}

function playGame(playersGuess){
    if(playersGuess === mysteryNumber){
        gameWon = true;
        endGame();
    }else if(playersGuess < mysteryNumber){
        chancesLeft--;
        output.innerHTML = "Higher than that";
    }
    else if(playersGuess > mysteryNumber){
        chancesLeft--;
        output.innerHTML = "Lower than that";
    }

    chances.innerHTML = "Chances: " + chancesLeft;

    if(chancesLeft < 1){
      endGame();
    }
}

function endGame(){
    if(gameWon){      
        //button.disabled = true; 
        output.innerHTML = "Congrats. You guessed it. The number was " + mysteryNumber;
        
    }else{
        output.innerHTML = "You've used up your chances. The number was " + mysteryNumber;
        //button.disabled = true;
    }
    input.disabled = true;
    button.textContent = "Replay";
    button.removeEventListener("click", checkGuess);
    button.addEventListener("click", reloadWindow);


}

function reloadWindow() {
    window.location.reload();
}