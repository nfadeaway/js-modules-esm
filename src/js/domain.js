class Character {
}

(function () {
  const script = document.createElement('script');
  script.src = './js/game.js';
  document.querySelector('body').appendChild(script);
  console.log('game loaded');
}());