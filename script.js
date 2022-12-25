'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');

    // when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;

    // css in JavaScript
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // high score
    if (scoreNumber > highScore) {
      highScore = scoreNumber;
      document.querySelector('.highscore').textContent = highScore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreNumber > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      scoreNumber--;
      document.querySelector('.score').textContent = scoreNumber;
    } else {
      // document.querySelector('.message').textContent = '💥 Game over!';
      displayMessage('💥 Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //    else if (guess > secretNumber) {
  //     if (scoreNumber > 1) {
  //         document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
  //         scoreNumber--;
  //         document.querySelector('.score').textContent = scoreNumber;
  //       } else {
  //         document.querySelector('.message').textContent = '💥 Game over!';
  //         document.querySelector('.score').textContent = 0;
  //       }

  //     // when guess is wrong
  //   } else if (guess < secretNumber) {
  //     if (scoreNumber > 1) {
  //       document.querySelector('.message').textContent = ;
  //       scoreNumber--;
  //       document.querySelector('.score').textContent = scoreNumber;
  //     } else {
  //       document.querySelector('.message').textContent = '💥 Game over!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreNumber = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').value = secretNumber;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';

  //css
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
