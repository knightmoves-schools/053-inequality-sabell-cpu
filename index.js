function guessNumber(guess) {
     // Loose equality: '25' == 25 is true, so strings with "25" will be treated as equal.
    if (guess == 25) {
        return 'yay';
    } else {
        return 'nuh uh';
    }
}
function strictGuessNumber(guess) {
  // Strict equality: only the number 25 (type number) will be equal.
  if (guess === 25) {
    return 'yuh you got it';
  } else {
    return 'nope not it';
  }
}