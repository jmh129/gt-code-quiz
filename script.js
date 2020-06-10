var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");
var timeEl = document.querySelector("time");

startGameBtnEl.addEventListener("click", function () {
  console.log("Button Clicked.");
  startPageEl.style.display = "none";
  timeRemain();
});

// function startQuiz(event) {
//   if (event.target.matches("#click")) {
//     startPageEl.style.display = "none";
//   } else {
//     startPageEl.style.display = "block";
//   }
// }

function timeRemain() {
  var timeLeft = 60;
  var timeInterval = setInterval(function () {
    time.textContent = "Time: " + timeLeft;
    timeLeft--;
  }, 1000);
}
