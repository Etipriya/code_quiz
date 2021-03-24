// Declare characters

// Declare a click event on high score

//Declare the start of timer from 60sec
const timeEL = document.querySelector(".time");
const mainEL = document.querySelector("main");

let secondsLeft = 59;

const setTime = function () {
  let isStartQuiz;
  let isCountdown;
  let isStop;
  isStartQuiz = setInterval(setTime, 60000);
  isCountdown = setInterval(decrease, 60000 - 1);
  isStop = setInterval(stop, 0);

  const callback = function () {
    setInterval.startBtn = isStartQuiz();
  };
  if (timer === 0) {
    showform();
  }
  const timerInterval = setInterval(callback, 60000);
};
const sendMessage = function () {
  String = (callback, "DONE");
};
setTime();

//Declare an event when click on the start button
startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  introSection.style.display = "none";
}
