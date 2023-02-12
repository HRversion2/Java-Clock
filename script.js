const hrs = document.querySelector("#hrs");
const mins = document.querySelector("#min");
const secs = document.querySelector("#sec");

let timer;

let time = 0;

const numFormatter = function (num) {
  return num < 10 ? "0" + num : num;
};

document.querySelector("#start").addEventListener("click", function (e) {
  timer = setInterval(function () {
    time++;

    const seconds = time % 60;
    const minutes = Math.floor(time / 60);
    const hours = Math.round(time / 3600);

    secs.textContent = numFormatter(seconds);
    mins.textContent = numFormatter(minutes);
    hrs.textContent = numFormatter(hours);

    document.querySelector("#start").disabled = true;
  }, 1000);
});

document.querySelector("#stop").addEventListener(
  "click",
  function (e) {
    clearInterval(timer);
    document.querySelector("#start").disabled = false;
  },
  1000
);

document.querySelector("#reset").addEventListener(
  "click",
  function (e) {
    clearInterval(timer);

    time = 0;

    secs.textContent = "00";
    mins.textContent = "00";
    hrs.textContent = "00";

    document.querySelector("#start").disabled = false;
  },
  1000
);
