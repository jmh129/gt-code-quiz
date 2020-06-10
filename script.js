var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");
var listGroup = document.querySelector(".list-group");

var question = ["Commonly used data types DO NOT include:"];
var answers = ["strings", "booleans", "alerts", "numbers"];

// Start the game and begin timer.
startGameBtnEl.addEventListener("click", function () {
  // console.log("Button Clicked.");
  // startPageEl.style.display = "none";
  timeRemain();
  renderQuestion();
});

// Function to render the question to the card.
function renderQuestion() {
  cardTitle.textContent = "";
  cardText.textContent = "";
  startGameBtnEl.remove();
  cardTitle.textContent = question[0];

  // Loop for answers in array still testing this 
  for (i = 0; i < answers.length; i++) {
    var answer = answers[i];
    cardText.innerHTML += answers[i] + "<br>";
  }
}

// function startQuiz(event) {
//   if (event.target.matches(".btn")) {
//     startPageEl.style.display = "none";
//   } else {
//     startPageEl.style.display = "block";
//   }
// }

// Timer function
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
