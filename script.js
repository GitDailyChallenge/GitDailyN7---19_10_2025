const DisplayTitletheNumber = document.getElementById("titleNumber");
const userInput = document.getElementById("userInput");
const result = document.getElementById("result");
const attenpts = document.getElementById("attempts");
const submitBtn = document.getElementById("submitBtn");
const againBtn = document.getElementById("againBtn");

let theNumber = Math.floor(Math.random() * 100) + 1;
let = attemptsCount = 0;

submitBtn.addEventListener("click", () => {
  const userGuess = parseInt(userInput.value);
  attemptsCount++;
  attenpts.textContent = `Attempts: ${attemptsCount}`;
  if (userGuess === theNumber) {
    result.textContent = "Congratulations! You guessed the number!";
    DisplayTitletheNumber.textContent = `The Number Was: ${theNumber}`;
    submitBtn.style.display = "none";
    againBtn.style.display = "flex";
  } else if (userGuess < theNumber) {
    result.textContent = "Too low! Try again.";
  } else {
    result.textContent = "Too high! Try again.";
  }
});

againBtn.addEventListener("click", () => {
  theNumber = Math.floor(Math.random() * 100) + 1;
  let = attemptsCount = 0;
  DisplayTitletheNumber.textContent = "guess the number:?";
  DisplaytheNumber.textContent = "?";
  result.textContent = "";
  userInput.value = "";
  attenpts.textContent = `Attempts: ${attemptsCount}`;
  submitBtn.style.display = "flex";
  againBtn.style.display = "none";
});
