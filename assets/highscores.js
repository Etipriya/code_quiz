//Declare global data
const goBackBtn = document.getElementById("go-back");
const goBackBtn = document.getElementById("clear");

//Declare function for clear button
const clear = () => {
  localStorage.clear();
  function clearText() {
    let clear;
    clear = document.getElementById("clear");
    if (clear.firstChild.nodeValue === click) {
    clear.firstChild.nodeValue = "clear-screen";
    } else {
    clear.firstChild.nodeValue = "stay";
    }
};
// get high score
const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
};
//render high score
const renderHighScoresTable = highScores => {
  if (highScores.length === 0) {
    const resultEmpty = noResults();
    bodyElement.appendChild(resultEmpty);
  } else {
    const showResults = resultsTable();
    bodyElement.appendChild(showResults);
  }
};

// shows no result element
const noResults = () => {
  const noResultsDiv = document.createElement("div");
  noResultsDiv.setAttribute("id", "results-div");

  const noResultsH2 = document.createElement("h2");
  noResultsH2.textContent = "No results to show right now";

  noResultsDiv.appendChild(noResultsH2);

  return noResultsDiv;
};

//Form a table to show the results of the quiz
const resultsTable = () => {
  const tableDiv = document.createElement("div");
  tableDiv.setAttribute("id", "table");

  const resultDiv = document.createElement("div");
  resultDiv.setAttribute("id", "results");
  resultDiv.textContent = getFromLocalStorage();

  tableDiv.appendChild(resultsDiv);

  return tableDiv;
};

const onload = () => {
  const highScores = getFromLocalStorage();
  renderHighScoresTable(highScores);
};

goBackBtn.addEventListener("click", go - back);
clearBtn.addEventListener("click", clear);
window.addEventListener("load", onload);

//function clearText() {
// let clear;
// clear = document.getElementById("clear");
// if (clear.firstChild.nodeValue === click) {
// clear.firstChild.nodeValue = "clear-screen";
// } else {
// clear.firstChild.nodeValue = "stay";
// }
