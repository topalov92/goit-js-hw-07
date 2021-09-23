const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function changeSize() {
    span.setAttribute('style', `font-size: ${input.value}px`);
};

input.addEventListener('input', changeSize);
