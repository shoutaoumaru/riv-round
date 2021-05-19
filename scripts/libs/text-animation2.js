class TextAnimation2 {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
  }
  animate() {
    this.DOM.el.classList.toggle('reveal');
  }
}
//ページロード時のテキストアニメーション
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const loadAnimation = document.querySelector('.clip-text01');
    loadAnimation.classList.toggle('reveal');

  }, 1850);
});
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    const loadAnimation2 = document.querySelector('.clip-text02');
    loadAnimation2.classList.toggle('reveal');
    const loadAnimation3 = document.querySelector('.clip-text03');
    loadAnimation3.classList.toggle('reveal');
    const loadAnimation4 = document.querySelector('.clip-text04');
    loadAnimation4.classList.toggle('reveal');
  }, 2500);
});