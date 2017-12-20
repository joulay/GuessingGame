var randomNumber = Math.floor(Math.random() * 10) + 1;
var numberOfGuesses = 4;
var guessCount = 1;
var guesses = document.querySelector(".guesses");
var hints = document.querySelector(".hints");
var result = document.querySelector(".result");
var guess = document.getElementById("guess");
var button = document.getElementById("button");

/* <script>
$( document ).click(function() {
    $( "#toggle" ).effect( "shake" );
  });
</script> */

var count=11;
var counter=setInterval(timer, 1000); 
// function timer() {
//     count=count-1;
//   if (count <= 0) {
//     clearInterval(counter);
//      result.textContent = "time's up"
//      window.setTimeout(resetGame, 2000);
//   }
 
//   document.getElementById("timer").innerHTML=count + " secs";

// }

function resetGame() {
  randomNumber = Math.floor(Math.random() * 10) +1;
  numberOfGuesses = 4;
  guesses.textContent = "";
  hints.textContent = "";
  guess.textContent = "";
  guessCount = 1;
  result.textContent = "";
  count = 11;
}

function checkAnswer() {
  var currentGuess = Number(guess.value)
  guess.value = "";
  if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
  }
      guesses.textContent += currentGuess + ' ';
      guessCount ++;
  if (Number(currentGuess) === randomNumber) {
      guesses.textContent = "";
      hints.textContent = "";
  		result.textContent = 'CONGRATULATIONS!';
      result.style.backgroundColor = "pink";
      window.setTimeout(resetGame, 2000);
    
  }
  else if (currentGuess > randomNumber) {
  		hints.textContent = 'Too high! ' + (numberOfGuesses -1) + ' guesses left';
  }
  else {
  		hints.textContent = 'Too low! ' + (numberOfGuesses - 1) + ' guesses left';
  }
  numberOfGuesses -= 1;
  
  if (!numberOfGuesses) {
      guesses.textContent = "";
      hints.textContent = "";
        result.textContent = 'Oof! You\'re out of guesses';
        result.style.backgroundColor = "green";
      window.setTimeout(resetGame, 2000);
  }
};


button.addEventListener('click', checkAnswer);

