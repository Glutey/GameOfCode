 // start game with an event listener - set up function to start timer and display questions.
 var startQuiz = addEventListener("click", startGame);
 document.getElementById("start").addEventListener("click", );
 
 function startGame() {
     document.getElementById("demo").innerHTML = timer();
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

  