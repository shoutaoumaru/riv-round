document.addEventListener('DOMContentLoaded', () => {
  new Vivus('move', {
    type: 'scenario-sync',
    duration: 200,
    forceRender: false,
    animTimingFunction: Vivus.EASE
  })
});