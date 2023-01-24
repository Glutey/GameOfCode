//  To begin task we must declare all variables first;  so make a list (hints are left within the HTML for reference) 

var time = 60;
var timer;
var currentQuestion = 0;
var score = 0;
var submit = ;

// sound effects for riggt and wrong answer
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
                
 // start game with an event listener - set up function to start timer and display questions.
 var startQuiz = document.addEventListener("click"); // wrong, needs to be get ElementByID first, as that declares what is required
 document.getElementById("start").addEventListener("click"); // this should then be startQuiz.addEventListener("click"); this then states what we want from it
 
 var questionContainer = document.querySelector("queston-title"); //used to grab div for the Questions.
 var choicesContainer = document.querySelector("choices"); // Grab div for the answer choices.
 var endQuiz = document.querySelector("end-screen"); // Grabs the div that will allow us to end the game and toggle the visibility.

 const questionArray = questions; // we have access to the question.js due to the shared space in the index.HTML file. Thus allowing me to refer to variables declared in the question.js file.

function startGame(){
    document.getElementById("start")
    function time(){
    var timeLeft = 60;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timer = setInterval(function () { 
        // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        time.textContent = timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else (timeLeft === 0) {
        // Use `clearInterval()` to stop the timer
        clearInterval(timeLeft);
      }; 1000})
    }}


  displayQuestion = function (){} // wrong... a statement should be declared first - then the name of the 

  function displayQuestion() {
      for (var i = 0; i < questions.length; i++)
      if (currentQuestion < questions[i]) {
        // lost...
      }
    }

// function code for answer selection 
function checkAnswer() {
    var correct1 = "Domain Object Model";
    var selected = document.querySelector('input[name="Domain Object Model"]:checked').value;
    if (selected === correct1) {
      sfxRight.play(); // calls the sound effect
    }else {
        sfxWrong.play();} // calls the sound effect



