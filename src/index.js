console.log('index.js loaded');

(function () {
  const script = document.createElement('script');
  script.src = './js/domain.js';
  document.querySelector('body').appendChild(script);
  console.log('domain loaded');
}());