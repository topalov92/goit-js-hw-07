const input = document.querySelector('#validation-input');

input.placeholder = `Введи ${input.dataset.length} символов`;

function changeBorderColor(event) {
  const length = event.currentTarget.value.length;
  const newLength = parseInt(event.currentTarget.dataset.length);

  if (length === newLength) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  } else if (length === 0) {
    event.currentTarget.classList.remove('invalid');
    event.currentTarget.classList.remove('valid');
  } else {
    event.currentTarget.classList.add('invalid');
    event.currentTarget.classList.remove('valid');
  }
}

input.addEventListener('blur', changeBorderColor);