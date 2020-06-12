// VARIABLE DEFINITIONS
var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var submitButtonEl = document.querySelector(".card-text");
var clearListBtn = document.getElementById("clear-list");

var answersEl;
var timeLeft;
var score = 0;

var highScores = localStorage.getItem("highScores");
if (!highScores) {
  highScores = [];
} else {
  highScores = JSON.parse(highScores);
}

var currentQuestionIndex = 0;
var arrayOfQuestions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
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
    timeLeft = 0;
    endOfQUiz();
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
  alert("Wrong! Ten Seconds has been deducted...");
  currentQuestionIndex++;
}

// END OF QUIZ INITIALS INPUT
function endOfQUiz() {
  cardTitle.textContent = "";
  cardText.textContent = "";
  cardTitle.textContent = "Quiz Complete!";
  var createScoreCard = document.createElement("p");
  createScoreCard.textContent = "Your final score is " + score + ".";
  cardTitle.appendChild(createScoreCard);

  // Enter Initials Section
  var enterInitials = document.createElement("form");
  enterInitials.setAttribute("id", "myForm");
  createScoreCard.appendChild(enterInitials);

  var initialsInput = document.createElement("input");
  initialsInput.setAttribute("id", "text");
  initialsInput.setAttribute("placeholder", "Enter Your Initials");
  document.getElementById("myForm").appendChild(initialsInput);
  
}

// FUNCTION TO ADD INITIALS AND SCORE TO LIST 
function renderHighScores() {
  var ul = document.getElementById("high-scores-list");
  if (ul !== null) {
  var htmlStr = "";
  for (var i = 0; i < highScores.length; i++) {
    htmlStr += `<li> ${highScores[i].user}, ${highScores[i].score}</li>`;
  }
  ul.innerHTML = htmlStr;
}}

// TIMER FUNCTION
function timeRemain() {
  timeLeft = 60;
  var timeInterval = setInterval(function () {
    timeEl.textContent = "Time: " + timeLeft;
    timeLeft--;
    // console.log("Timer Started");
    if (timeLeft <= -1) {
      clearInterval(timeInterval);
      // alert("Quiz Over! Your Score is " + score + ".");
      endOfQUiz();
    }
  }, 1000);
}

renderHighScores()

// EVENT LISTENERS
// START GAME AND BEGIN TIMER
startGameBtnEl.addEventListener("click", function () {
  timeRemain();
  renderQuestion();
});

// CHECK IF BUTTON CLICKED CONTAINS ANSWER MOVE TO NEXT QUESTION
submitButtonEl.addEventListener("click", function (event) {
  event.preventDefault();
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

// RENDER INTITIALS TO LIST 
document.addEventListener("submit", function (event) {
  event.preventDefault();
  if (event.target.id === "myForm") {
    var initials = document.getElementById("text");
    var initialsText = initials.value.trim();
    var userObject = { user: initialsText, score: score };
    highScores.push(userObject);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.replace("./scorecard.html");
  }
});
