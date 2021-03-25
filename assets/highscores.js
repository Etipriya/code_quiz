//Declare global data
const goBackBtn = document.getElementById("go-back");
const goBackBtn = document.getElementById("clear");

const clear = () => {
  localStorage.clear();
};
// get high score
const getFromLocalStorage = () => {
  const highScores = localStorage.getItem("highScores");
  if (highScores) {
    return highScores;
  } else {
    return [];
  }
  console.log(highScores);
};
//render highscore
const renderHighScoresTable = (highScores) =>{
  if(highScores.length === 0){
    const resultEmpty = noResults();
    bodyElement.appendChild(resultEmpty);
    console.log("empty");
  }else{

  }
  
}

const onload = () => {
  const highScores = getFromLocalStorage();
};

goBackBtn.addEventListener("click", go - back);
clearBtn.addEventListener("click", clear);
window.addEventListener("load", onload);

//function clearText() {
  let clear;
  clear = document.getElementById("clear");
  if (clear.firstChild.nodeValue === click) {
    clear.firstChild.nodeValue = "clear-screen";
  } else {
    clear.firstChild.nodeValue = "stay";
  }
}
