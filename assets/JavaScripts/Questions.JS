var questions = [
    {
        question: "What does DOM stand for?",
        choice1: "Domain Obsessive Monitor",
        choice2: "Double Object Mains",
        choice3: "Domain of Model",
        answer: "Domain Object Model"
    },
    {
        question: "What does Const do? ",
        choice1: "Const allows the varible to change its value",
        choice2: "Const makes the code 'considerate' and in keeping with accessibility",
        choice3: "Const ensures that the variable is unchangable",
        answer: "Const ensures that the variable is unchangable"
    },
    {
        question: "what does API stand for?",
        choice1: "Application Programable Interface",
        choice2: "Application Progress Interface",
        choice3: "Applicable Program Intro",
        answer: "Application Programable Interface"
    }

    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
      }
]
    // start game with an event listener - set up function to start timer and display questions.
    var startQuizz = addEventListener("click", startGame);
    document.getElementById("start").addEventListener("click", );

    function startGame() {
        document.getElementById("demo").innerHTML = timer();
      }
Timer = set limit, count down 1000 ms each time, subtrack 10 seconds for each wrong answer, sound affect for right or wrong answer, game ends when timer reaches 0 or when all questions are answered






