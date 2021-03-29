// Quiz Questions
const questions = [
  {
    title: "What are javascript Data Types?",
    choices: ["Number", "String", "Boolean", "Object"],
    correctAnswer: "Object",
  },
  {
    title: "Which company developed Javascript?",
    choices: ["Microsoft", "Facebook", "Apple", "Netscape"],
    correctAnswer: "Netscape",
  },
  {
    title: "Break statement exists in which loop?",
    choices: ["Current loop", "Html loop", "JS loop", "Previous loop"],
    correctAnswer: "Current loop",
  },
  {
    title: "Which keyword is used to print the text in the screen?",
    choices: ["console.log", "document.write", "let index", "parentDiv.append"],
    correctAnswer: "document.write",
  },
  {
    title: "What boolean operators can be used in Javascript?",
    choices: ["&&", "(!!)", "(¬¬)", "$"],
    correctAnswer: "&&",
  },
];

//Declaring global elements
const startButtonElement = document.getElementById("start-btn");
const bodyElement = document.body;
const quizIntroElement = document.getElementById("quiz-intro");
const timerElement = document.getElementById("timer");
const secondsRemaining = document.querySelector("#seconds-remaining");
const questionContainer = document.createElement("div");
const quizContainer = document.getElementById("quiz-container");

let timeValue = 5;
let index = 0;

//Declare div and button choices
const createChoices = choices => {
  const parentDiv = document.createElement("div");

  const createChoiceAndAppend = choice => {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", choice);
    button.setAttribute("class", "quiz-btn");
    button.textContent = choice;

    div.appendChild(button);
    parentDiv.appendChild(div);
  };
  choices.forEach(createChoiceAndAppend);
  return parentDiv;
};

// Verify the choices event
const verifyChoice = event => {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;

      //quizContainer.remove(document.getElementById("questions"));
      quizContainer.removeChild(questionContainer);
      renderQuestion();
    } else {
      alert("Incorrect answer");
    }
  }
};

// Develop quiz container
const createQuestion = question => {
  questionContainer.setAttribute("id", "questions-container");
  questionContainer.setAttribute("class", "questions-container");
  questionContainer.setAttribute("data-answer", question.correctAnswer);

  const h1 = document.createElement("h1");
  h1.textContent = question.title;

  const choices = createChoices(question.choices);

  questionContainer.appendChild(h1);
  questionContainer.appendChild(choices);
  quizContainer.appendChild(questionContainer);

  questionContainer.addEventListener("click", verifyChoice);
  return questionContainer;
};

const renderQuestion = () => {
  if (index < questions.length) {
    const quesContainer = createQuestion(questions[index]);

    //append
    quizContainer.appendChild(quesContainer);
  } else {
    //const formContainer = formContainerDiv();
    //bodyElement.appendChild(formContainer);
    alert("Done");
  }
};

//Develop Form container
const formContainerDiv = () => {
  const formContainer = document.createElement("div");

  const h1 = document.createElement("h1");
  h1.textContent = "All done!";

  const finalScoreDiv = document.createElement("div");
  finalScoreDiv.textContent = "Your Final score = " + secondsRemaining + "";

  const enterInitialDiv = document.createElement("label");
  enterInitialDiv.textContent = "Enter your name";

  const inputInitialsDiv = document.createElement("input");
  inputInitialsDiv.setAttribute;

  const submitButton = document.createElement("button");
  submitButton.setAttribute("class", "submit-btn");
  submitButton.textContent = "Submit";

  formContainer.appendChild(h1);
  formContainer.appendChild(finalScoreDiv);
  formContainer.appendChild(enterInitialDiv);
  formContainer.appendChild(inputInitialsDiv);
  formContainer.appendChild(submitButton);
  formContainer.appendChild(formContainer);

  // High Score

  const submitForm = event => {
    event.parentDefault();

    if (inputInitialsDiv.value === "") {
      alert("Please enter your name");
      return;
    }
    saveScore(inputInitialsDiv.value, secondsRemaining);
    window.location = "highScores.html";
  };
  submitButton.addEventListener("click", submitForm);
};

//Timer
const startTimer = () => {
  const timerTick = () => {
    timerElement.textContent = timeValue;
    timeValue -= 1;
  };

  const timer = setInterval(timerTick, 1000);
  console.log(index);
  console.log(questions.length);
  if (index === questions.length) {
    clearInterval(timer);
  }
  if (timeValue <= 0) {
    console.log(timeValue);
    clearInterval(timer);
  }
};

//Remove Start Quiz
const startQuiz = () => {
  //const startContainer = document.getElementById("quiz-intro");
  quizIntroElement.remove();

  renderQuestion();

  startTimer();
};
startButtonElement.addEventListener("click", startQuiz);
