const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input',action)

function changeSize() {
  span.style.fontSize = `${input.value}px`;
}

input.value = parseInt(
  window.getComputedStyle(document.body).getPropertyValue('font-size')
);

input.addEventListener('input', changeSize);

