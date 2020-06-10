var startGameBtnEl = document.getElementById("start-button");
var startPageEl = document.getElementById("start-page");

startGameBtnEl.addEventListener("click", function (event) {
  console.log("Button Clicked.");
  if ("click") {
    startPageEl.style.display = "none";
  } else {
    return;
  }
});
