const main = document.getElementById("high-scores-container");
const clearButton = document.getElementById("clear-highscores");

const renderHighScores = () => {
  const highscores = getFromLocalStorage();

  const ul = document.createElement("ul");
  ul.setAttribute("class", "highscores");
  ul.setAttribute("id", "highscores");

  const renderListItem = each => {
    console.log("each");
    const li = document.createElement("li");
    li.textContent = `${each.user} - ${each.score}`;

    ul.append(li);
  };

  highscores.forEach(renderListItem);

  main.append(ul);
};

const clearHighscores = () => {
  localStorage.clear();

  const highscores = document.getElementById("highscores");

  if (highscores) {
    highscores.remove();
  }
};
clearButton.addEventListener("click", clearHighscores);

window.addEventListener("load", renderHighScores);
