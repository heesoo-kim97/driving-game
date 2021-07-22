
var $car = document.querySelector('.race-car');

window.addEventListener('keydown', handleRotation);

function handleRotation(event) {
  if (event.key === 'ArrowLeft') {
    $car.className = 'race-car left';
  } else if (event.key === 'ArrowRight') {
    $car.className = 'race-car right';
  } else if (event.key === 'ArrowUp') {
    $car.className = 'race-car top';
  } else if (event.key === 'ArrowDown') {
    $car.className = 'race-car bottom';
  }
}
