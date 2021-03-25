// Declare a click event on high score

//Declare the start of timer from 60sec
const time = document.querySelector(".time");
const startButton = document.getElementById("start-button");
let secondsLeft = 60;

const startTimer = function () {
  const callback = function () {
    secondsLeft -= 1;
  };
  const timerInterval = setInterval(callback, 1000);
  return timerInterval;
};

//Declare an event when click on the start button
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  introSection.style.display = "none";
  //timer
  startTimer();
}

//Timer
