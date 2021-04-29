//Get from Local storage
const getFromLocalStorage = () => {
  const localStorageData = JSON.parse(localStorage.getItem("highscores"));

  if (localStorageData) {
    return localStorageData;
  } else {
    return [];
  }
};
