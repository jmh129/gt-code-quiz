var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.getElementById("time");
var cardTitle = document.querySelector(".card-title");
var cardText = document.querySelector(".card-text");


// Start the game and begin the time. 
startGameBtnEl.addEventListener("click", function () {
  // console.log("Button Clicked.");
  // startPageEl.style.display = "none";
  timeRemain();
  renderQuestion();
});


function renderQuestion() {
  // Clear todoList element and update todoCountSpan
  cardTitle.innerHTML = "Insert Function for Question Title";
  cardText.textContent = "Insert Funtion for Question Answers";
  startGameBtnEl.remove()
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
