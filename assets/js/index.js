const questions = [
  {
    title: "What are javascript Data Types",
    options: ["Number", "String", "Boolean", "Object"],
    answer: "Object",
  },
  {
    title: "Which company developed Javascript?",
    options: ["Microsoft", "Facebook", "Apple", "Netscape"],
    answer: "Netscape",
  },
  {
    title: "Break statement exists in which loop?",
    options: ["Current loop", "Html loop", "JS loop", "Previous loop"],
    answer: "Current loop",
  },
  {
    title: "Which keyword is used to print the text in the screen?",
    options: ["console.log", "document.write", "let index", "parentDiv.append"],
    answer: "document.write",
  },
  {
    title: "What boolean operators can be used in Javascript?",
    options: ["&&", "(!!)", "(¬¬)", "$"],
    answer: "&&",
  },
];

let timerValue = questions.length * 10;
let currentQuestionIndex = 0;

const main = document.getElementById("quiz-app");

const renderNextQuestion = event => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("li")) {
    const option = target.getAttribute("data-option");
    const answer = currentTarget.getAttribute("data-answer");

    if (option === answer) {
      currentQuestionIndex++;

      const questionContainer = document.getElementById("question-container");
      questionContainer.remove();

      if (currentQuestionIndex < questions.length) {
        const nextQuestion = questions[currentQuestionIndex];

        renderQuestion(nextQuestion);
      }
    } else {
      timerValue = timerValue - 5;
    }
  }
};

//will render a question container for a given question
const renderQuestion = question => {
  const questionContainer = document.createElement("div");
  questionContainer.setAttribute("class", "question-container");
  questionContainer.setAttribute("id", "question-container");

  const questionDiv = document.createElement("div");
  questionDiv.setAttribute("class", "question");
  questionDiv.textContent = question.title;

  const ul = document.createElement("ul");
  ul.setAttribute("class", "answers");
  ul.setAttribute("data-answer", question.answer);

  const li1 = document.createElement("li");
  li1.setAttribute("data-option", question.options[0]);
  li1.textContent = question.options[0];

  const li2 = document.createElement("li");
  li2.setAttribute("data-option", question.options[1]);
  li2.textContent = question.options[1];

  const li3 = document.createElement("li");
  li3.setAttribute("data-option", question.options[2]);
  li3.textContent = question.options[2];

  const li4 = document.createElement("li");
  li4.setAttribute("data-option", question.options[3]);
  li4.textContent = question.options[3];

  ul.append(li1, li2, li3, li4);

  questionContainer.append(questionDiv, ul);

  const startQuizContainer = document.getElementById("start-quiz-container");

  if (startQuizContainer) {
    startQuizContainer.remove();
  }

  main.append(questionContainer);

  ul.addEventListener("click", renderNextQuestion);
};

//will render the form on quiz completion
const renderForm = () => {
  const formContainer = document.createElement("div");
  formContainer.setAttribute("class", "form-container");

  const h2 = document.createElement("h2");
  h2.textContent = "All Done!!";

  const scoreDiv = document.createElement("div");
  scoreDiv.setAttribute("class", "score");
  scoreDiv.textContent = `Your score is ${timerValue}`;

  const form = document.createElement("form");
  form.setAttribute("class", "score-form");

  const label = document.createElement("label");
  label.textContent = "Enter Initials: ";

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "initials-input");

  const button = document.createElement("button");
  button.setAttribute("class", "btn");
  button.textContent = "Submit";

  form.append(label, input, button);
  formContainer.append(h2, scoreDiv, form);

  main.append(formContainer);

  form.addEventListener("submit", onSubmit);
};

const renderGameOver = () => {
  const questionContainer = document.getElementById("question-container");
  questionContainer.remove();

  const div = document.createElement("div");
  div.setAttribute("class", "game-over-container");

  const h2 = document.createElement("h2");
  h2.textContent = "Game Over!!";

  div.append(h2);
  main.append(div);
};

//Define onSubmit function
const onSubmit = event => {
  event.preventDefault();

  const initialsInput = document.getElementById("initials-input");

  const initials = initialsInput.value;
  const scoreObject = {
    user: initials,
    score: timerValue,
  };

  const highscores = getFromLocalStorage();

  highscores.push(scoreObject);

  localStorage.setItem("highscores", JSON.stringify(highscores));

  window.location.href = "highscores.html";
};

//Declaring start function
const startTimer = () => {
  const timerSpan = document.getElementById("timer");
  timerSpan.textContent = timerValue;

  const callback = () => {
    // if timer is active and game is still active
    if (timerValue > 0 && currentQuestionIndex !== questions.length) {
      timerValue = timerValue - 1;
      timerSpan.textContent = timerValue;
    }

    if (currentQuestionIndex === questions.length) {
      clearInterval(timer);
      renderForm();
    }

    if (timerValue <= 0 && currentQuestionIndex !== questions.length) {
      clearInterval(timer);
      renderGameOver();
    }
  };

  const timer = setInterval(callback, 1000);
};

//function called when you clicked on start quiz button
const startQuiz = () => {
  startTimer();
  renderQuestion(questions[currentQuestionIndex]);
};

//add event listener for click event to start quiz button
const startQuizButton = document.getElementById("start-quiz-btn");
startQuizButton.addEventListener("click", startQuiz);
