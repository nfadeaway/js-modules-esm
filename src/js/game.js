class Game {
  start() {
    console.log('game started');
  }
}

class GameSavingData {
}

function readGameSaving() {
}

function writeGameSaving() {
}

(function () {
  const script = document.createElement('script');
  script.src = './js/app.js';
  document.querySelector('body').appendChild(script);
  console.log('app loaded');
}());
