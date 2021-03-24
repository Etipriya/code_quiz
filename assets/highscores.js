//Declare under high score page
// Clear commands

function clearText() {
  let clear;
  clear = document.getElementById("clear");
  if (clear.firstChild.nodeValue === click) {
    clear.firstChild.nodeValue = "clear-screen";
  } else {
    clear.firstChild.nodeValue = "stay";
  }
}
addEventListener("click", clearScore);
