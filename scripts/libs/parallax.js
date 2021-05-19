//パララックス縦
const parallax = document.querySelectorAll('.parallax');
new simpleParallax(parallax);
//パララックス横右
const parallax01 = document.querySelectorAll('.parallax-rt');
new simpleParallax(parallax01, {
  orientation: 'right',
  scale: 1.8
});