 var questionArray = questions; 
 // we have access to the question.js due to the shared space in the index.HTML file. Thus allowing me to refer to variables declared in the question.js file.
 
 
 // start game with an event listener - set up function to start timer and display questions.
 var startQuiz = addEventListener("click", startGame);
 document.getElementById("start").addEventListener("click", );
 
//  function startGame() {
//      document.getElementById("demo").innerHTML = timer();
//    }

// Timer that counts down from 5
function countdown() {
    var timeLeft = 60;
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }




// function code for answer selection 
function checkAnswer() {
    var correct1 = "Domain Object Model";
    var selected = document.querySelector('input[name="Domain Object Model"]:checked').value;
    if (selected === correct1) {
      alert(correct.wav); //this needs to be linked to the correct file
    }else {
        alert(incorrect.wav + timer - 10000)
    }

  