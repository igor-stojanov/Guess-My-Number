'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let scoreNumber = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '💥 Game over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (scoreNumber > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      document.querySelector('.message').textContent = '💥 Game over!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
