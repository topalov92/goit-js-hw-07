let counterValue = 0;

const counter = document.querySelector('#value');
const btnDcr = document.querySelector('[data-action="decrement"]');
const btnIncr = document.querySelector('[data-action="increment"]');

btnDcr.addEventListener('click', decrement);
btnIncr.addEventListener('click', increment);

function increment() {
    counterValue += 1;
    counter.textContent = counterValue;
    return counterValue;
}
function decrement() {
    counterValue -= 1;
    counter.textContent = counterValue;
    return counterValue;
}