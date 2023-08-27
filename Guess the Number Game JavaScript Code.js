// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get user input
const guess = parseInt(prompt("Guess a number between 1 and 100"));

// Check if the guess is correct
if (guess === randomNumber) {
  console.log("Congratulations! You guessed the correct number!");
} else {
  console.log(`Sorry, the number was ${randomNumber}. Better luck next time!`);
}