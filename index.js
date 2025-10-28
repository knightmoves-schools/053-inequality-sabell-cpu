function guessNumber(guess) {
    if (guess != 25) {
        return "not it";
    }
}

function strictGuessNumber(guess) {
    // Return "not it" if guess is not strictly equal to 25
    if (guess !== 25) {
        return "not it";
    }
}

module.exports = { guessNumber, strictGuessNumber };