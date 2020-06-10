// VARIABLE DEFINITIONS
var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var listChoices = document.querySelector(".list");
var submitButtonEl = document.getElementById("submit-button");

// QUESTION AND ANSWER(S) ARRAYS
// var questions = ["Commonly used data types DO NOT include:"];
// var answers = ["strings", "booleans", "alerts", "numbers"];
// var answer = ["alerts"];

var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question:
      "The condition in an if . else statement is enclosed within ______.",
    answers: [
      "Quotes",
      "Curly Brackets",
      "Paranthese",
      "Square Brackets",
    ],
    answer: "Parentheses",
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of The Above",
    ],
    answer: "All of The Above",
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: "Quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "Terminal/Bash", "For Loops", "console.log"],
    answer: "Quotes",
  },
];
// Start the game and begin timer.
startGameBtnEl.addEventListener("click", function () {
  // console.log("Button Clicked.");
  console.log(startGameBtnEl);
  timeRemain();
  renderQuestion();
});

// submitButtonEl.addEventListener("click", function () {
//   currentQuestionIndex++;
//   console.log("Submit Button")
//   console.log(currentQuestionIndex);
// });

function renderQuestion() {
  var currentQuestion = arrayOfQuestions[currentQuestionIndex];
  cardTitle.textContent = "";
  cardText.textContent = "";
  startGameBtnEl.remove();

  // SET TITLE TO SHOW QUESTIONS
  var questionEl = document.createElement("h5");
  questionEl.textContent = currentQuestion.question;
  cardTitle.append(questionEl);

  // CREATE A LIST OF ITEMS OF ANSWERS
  var answersEl = document.createElement("li");

  // LOOP TO ITERATE THROUGH ARRAY
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    var answersEl = document.createElement("li");
    answersEl.setAttribute("class", "btn btn-primary");
    // answersEl.setAttribute("id", "submit-button");
    var choices = currentQuestion.answers[i];
    answersEl.textContent = choices;
    cardText.append(answersEl);
  }
}

// TIMER FUNCTION
function timeRemain() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    console.log("Timer Started");
    if (timeLeft === -1) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
