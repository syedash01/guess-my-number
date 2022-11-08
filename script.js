"use strick";

const message = document.querySelector(".message");
// const guess = Number(document.querySelector(".guess").value);
const btn = document.querySelector(".check");
const score = document.querySelector(".score");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector(".number");
const again = document.querySelector(".again");
let scoreNumber = 20;
let highScore = 0;

const guessNumber = (textMessage) => {
  if (scoreNumber > 1) {
    message.textContent = textMessage;
    scoreNumber--;
    score.textContent = scoreNumber;
  } else {
    message.textContent = "😢 You Lost The Game";
    score.textContent = 0;
  }
};

btn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    message.textContent = '"ERROR!!"enter the number!!';
  } else if (guess === secretNumber) {
    message.textContent = "🎉Correct Number!!";
    number.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = " #60b347";
    number.style.width = "30rem";

    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    guessNumber("📈 Too High");
  } else if (guess < secretNumber) {
    guessNumber("📉 TOO LOW!!");
  }
});

again.addEventListener("click", () => {
  scoreNumber = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "Start guessing...";
  score.textContent = scoreNumber;
  number.textContent = "?";
  const guess = Number((document.querySelector(".guess").value = ""));
  document.querySelector("body").style.backgroundColor = " #222";
  number.style.width = "15rem";
});
