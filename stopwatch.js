window.onload = function () {
  let interval;

  let seconds = 0;
  let tens = 0;

  const secondsHTML = document.querySelector(".seconds");
  const tensHTML = document.querySelector(".tens");

  const startButton = document.querySelector(".js-button-start");
  const stopButton = document.querySelector(".js-button-stop");
  const resetButton = document.querySelector(".js-button-reset");

  startButton.addEventListener("click", () => {
    interval = setInterval(() => {
      tens += 1;

      if (tens <= 9) {
        tensHTML.innerHTML = `0${tens}`;
      } else {
        tensHTML.innerHTML = `${tens}`;
      }

      if (tens === 99) {
        tens = 0;
        seconds += 1;
        if (seconds <= 9) {
          secondsHTML.innerHTML = `0${seconds}`;
        } else {
          secondsHTML.innerHTML = `${seconds}`;
        }
      }
    }, 10);
  });

  stopButton.addEventListener("click", () => {
    clearInterval(interval);
  });

  resetButton.addEventListener("click", () => {
    clearInterval(interval);

    tens = 0;
    seconds = 0;

    tensHTML.innerHTML = "00";
    secondsHTML.innerHTML = "00";
  });
};
