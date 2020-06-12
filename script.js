// VARIABLE DEFINITIONS
var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var listChoices = document.querySelector(".list");
var submitButtonEl = document.querySelector(".card-text");
var correctOrWrongEl = document.getElementById("footer");

var answersEl;
var timeLeft;
var score = 0;

var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["strings", "booleans", "alerts", "numbers"],
    answer: 2,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ______.",
    answers: [
      "Quotes",
      "Curly Brackets",
      "Paranthese",
      "Square Brackets",
    ],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    answers: [
      "Numbers and Strings",
      "Other Arrays",
      "Booleans",
      "All of The Above",
    ],
    answer: 3,
  },
  {
    question:
      "String values must be enclosed within ______ when being assigned to variables.",
    answers: ["Commas", "Curly Brackets", "Quotes", "Parentheses"],
    answer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      "JavaScript",
      "Terminal/Bash",
      "For Loops",
      "Console.log",
    ],
    answer: 3,
  },
];

// START QUIZ FUNCTION - Need to add in function to display score and email form and end if time === 0.
function renderQuestion() {
  var currentQuestion = arrayOfQuestions[currentQuestionIndex];
  if (currentQuestionIndex > 4) {
    alert("End of Quiz! Your score is " + score + ".");
  }
  cardTitle.textContent = "";
  cardText.textContent = "";
  startGameBtnEl.remove();

  // SET TITLE TO SHOW QUESTIONS
  var questionEl = document.createElement("h5");
  questionEl.textContent = currentQuestion.question;
  cardTitle.append(questionEl);

  // LOOP TO ITERATE THROUGH ARRAY
  for (var i = 0; i < currentQuestion.answers.length; i++) {
    answersEl = document.createElement("button");
    answersEl.setAttribute("id", "submit-button");
    answersEl.setAttribute("class", "btn btn-primary qButton");
    answersEl.setAttribute("data-index", i);
    var choices = currentQuestion.answers[i];
    answersEl.textContent = choices;
    cardText.append(answersEl);
  }
}

// COMPARE ANSWERS FUNCTIONS
function correctAnswer() {
  score = score + 10;
  alert("Correct!");
  currentQuestionIndex++;
}

function wrongAnswer() {
  score = score - 10;
  timeLeft = timeLeft - 10;
  alert("Wrong!");
  currentQuestionIndex++;
}

// UNDER CONSTRUCTION
// function endOfQUiz() {
//   cardTitle.textContent = "";
//   cardText.textContent = "";
//   cardTitle.textContent = "Quiz Complete!";
//   cardText.textContent = "Your final score is " + score + ".";
//   // var emailForm = document.createElement("input");
//   // emailForm.setAttribute("type", "input");

// }

// BUILD OUT HIGHSCORE PAGE seperate html

// TIMER FUNCTION
function timeRemain() {
  timeLeft = 5;
  var timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    // console.log("Timer Started");
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      alert("Times Up! Your Score is " + score + ".");
    }
  }, 1000);
}

// EVENT LISTENERS
// START GAME AND BEGIN TIMER
startGameBtnEl.addEventListener("click", function () {
  timeRemain();
  renderQuestion();
});

// CHECK IF BUTTON CLICKED CONTAINS ANSWER MOVE TO NEXT QUESTION
submitButtonEl.addEventListener("click", function (event) {
  var element = event.target;
  if (
    element.dataset.index ==
    arrayOfQuestions[currentQuestionIndex]["answer"]
  ) {
    correctAnswer();
    renderQuestion();
  } else {
    wrongAnswer();
    renderQuestion();
  }
});
