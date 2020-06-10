// VARIABLE DEFINITIONS
var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var listGroup = document.querySelector(".list-group");

// QUESTION AND ANSWER(S) ARRAYS 
var questions = ["Commonly used data types DO NOT include:", "next question"];
var answers = ["strings", "booleans", "alerts", "numbers"];
var answer = ["alerts"]


// Start the game and begin timer.
startGameBtnEl.addEventListener("click", function () {
  // console.log("Button Clicked.");
  timeRemain();
  renderQuestion();
});

// Function to render the question to the card.
// Need to figure out how to display Questions and Answers. Refernce todays videos
function renderQuestion() {
  cardTitle.textContent = "";
  cardText.textContent = "";
  startGameBtnEl.remove();

  // SET TITLE TO SHOW QUESTIONS 
  cardTitle.textContent = questions[0];

  // CREATE A LIST OF ITEMS OF ANSWERS
  // cardText.textContent = answers[0];

  for (var i = 0; i < answers.length; i++) {
    var choice = answers[i];

    var li = document.createElement("li");
    li.textContent = choice;
    li.setAttribute("data-index", i);
    cardText.appendChild(li);
  }
}
 

  
  // CREATED BUTTON AS REFERENCE
  // var button = document.createElement("button");
  // button.textContent = "Submit";
  // cardText.appendChild(button);

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
