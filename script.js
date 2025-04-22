const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitGuess");
const result = document.getElementById("result");
const animationBox = document.getElementById("animationBox");

let randomNumber = Math.floor(Math.random() * 10) + 1;

submitBtn.addEventListener("click", () => {
  const guess = parseInt(guessInput.value);
  animationBox.style.display = "block";

  if (guess === randomNumber) {
    result.textContent = "🎉 Sweet! You've guessed it right! 🎉";
    animationBox.className = "animation-box correct";
    randomNumber = Math.floor(Math.random() * 10) + 1; // reset game
  } else {
    result.textContent =  "🍭 Oh so close! You're below the target number! 🍭";
    animationBox.className = "animation-box wrong";
  }

  setTimeout(() => {
    animationBox.className = "animation-box";
    animationBox.style.display = "none";
  }, 1000);
});