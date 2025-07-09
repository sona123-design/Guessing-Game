let randomNumber;
let max;

function startGame() {
  const maxInput = document.getElementById("maxInput");
  const maxVal = parseInt(maxInput.value);

  if (isNaN(maxVal) || maxVal <= 1) {
    alert("⚠️ Please enter a valid number greater than 1.");
    return;
  }

  max = maxVal;
  randomNumber = Math.floor(Math.random() * max) + 1;

  document.getElementById("rangeEnd").textContent = max;
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("gameArea").classList.remove("hidden");
  document.getElementById("guessInput").value = '';
  document.getElementById("message").textContent = '';
}

function makeGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);
  const message = document.getElementById("message");

  if (isNaN(guess)) {
    message.textContent = "⚠️ Please enter a valid number.";
    message.style.color = "orange";
    return;
  }

  if (guess < 1 || guess > max) {
    message.textContent = `⚠️ Please enter a number between 1 and ${max}.`;
    message.style.color = "orange";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "green";
    document.getElementById("guessInput").disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "🔼 Too low! Try again.";
    message.style.color = "#ff8800";
  } else {
    message.textContent = "🔽 Too high! Try again.";
    message.style.color = "#ff8800";
  }

  guessInput.value = '';
}

function restartGame() {
  document.getElementById("setup").classList.remove("hidden");
  document.getElementById("gameArea").classList.add("hidden");
  document.getElementById("guessInput").disabled = false;
  document.getElementById("maxInput").value = '';
}
