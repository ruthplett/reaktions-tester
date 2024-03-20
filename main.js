let startStoppButton;
let yourTimeText;
let timerText;
let row;
let number;
let elapsedTime;
let width;
let averageTimeText;
let interval;
let averageRound;
let average;
let maxScore;

function startOrStopp() {
  startStoppButton = document.getElementById("startButton");
  yourTimeText = document.getElementById("yourTime");
  timerText = document.getElementById("timer");
  averageTimeText = document.getElementById("averageTime");

  if (yourTimeText.innerHTML === "0.000") {
    startStoppButton.innerHTML = "Stopp";
    buildTheForm();
    timer();
  } else {
    startStoppButton.innerHTML = "Start";
    clearInterval(interval);
  }
}

row = 0;

document.getElementById("form").onclick = function () {
  buildTheForm();

  clearInterval(interval);
  yourTimeText.innerHTML = number;
  timer();

  buildTheArray(row);
  averageTimeText.innerHTML = averageRound;

  compareArray();
  row += 1;

  startStoppButton.innerHTML = "Stopp";
}

function timer() {
  let startTime = Date.now();

  interval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    number = (elapsedTime / 1000).toFixed(3);
  }, 100);
}

// Bildung der Form
let form = document.getElementById("form");

function buildTheForm() {
  form.style.backgroundColor = getRandomColor();
  form.style.borderRadius = circleOrSquare();
  width = widthAndHeight();
  form.style.width = `${width}%`;
  form.style.aspectRatio = "1/1";     // Verhältnis zw Breite und Höhe
  form.style.marginLeft = `${marginLeft(width)}%`;
  form.style.marginTop = `${marginTop(width)}%`;
}

function getRandomColor() {
  let r = Math.random() * 255;
  let g = Math.random() * (255 - 70) + 70 | 0;
  let b = Math.random() * (255 - 70) + 70 | 0;

  return (`rgb(${r}, ${g}, ${b})`);
}

function circleOrSquare() {
  if (Math.random() <= 0.5) {
    return "50%";
  } else {
    return "0%";
  }
}

function widthAndHeight() {
  return Math.round(Math.random() * (30 - 5)) + 5;
}

function marginLeft(formWidth) {
  return Math.round(Math.random() * (90 - formWidth));
}

function marginTop(formWidth) {
  return Math.round(Math.random() * (70 - formWidth));
}

// Average Time
let timeArray = [];
let summe = 0;

function buildTheArray(i) {
  timeArray[i] = number;

  summe += parseFloat(timeArray[i]);

  average = summe / timeArray.length;
  averageRound = average.toFixed(3);
}

function compareArray() {
  maxScore = Math.min(...timeArray);
  document.getElementById("highestScore").innerHTML = maxScore;
}
