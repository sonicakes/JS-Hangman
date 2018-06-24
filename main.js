console.log("connected");
const wordArray = ["T", "R", "E", "E"];
const guessedLettersArray = ["_", "_", "_", "_"];
let numberOfLives = 6;
const guessLetter = function(guessedLetter) {
  if (numberOfLives <= 0) {
    console.log(`Sorry you're dead! No more lives for you.`);
    return;
  }
  //If the guessed letter matches a word letter,
  if (wordArray.indexOf(guessedLetter) === -1) {
    numberOfLives--;
    console.log(`Bad luck, the letter ${guessedLetter} is not part of word, try again`);
    console.log(`You have ${numberOfLives} left to play!`);
  } else {
    console.log(`Congrats, you have guessed that this letter ${guessedLetter} is part of the word`);

    // We now need to replace any _ in the guessedLettersArray, that matches
    // the correct letter in the wordArray that the user guessed.

    // So we will loop over the wordArray. If we find that the current characters
    // in wordArray matches the guessedLetter, we will replace that characters
    // in guessedLettersArray.

    for (let i = 0; i < wordArray.length; i++) {
      if (wordArray[i] === guessedLetter) {
        guessedLettersArray[i] = guessedLetter;
      }
    }

  }




  console.log(`Here is what you have guessed so far: ${guessedLettersArray}`);

  if (guessedLettersArray.indexOf("_") === -1) {
    console.log("GAME OVER! YOU HAVE WON");
  }
}
console.log(`Welcome to hangmans game. The word you need to guess is ${wordArray.length} characters long`);
guessLetter("A");
guessLetter("B");
guessLetter("C");
guessLetter("Z");
guessLetter("T");
guessLetter("Y");
guessLetter("R");
guessLetter("E");