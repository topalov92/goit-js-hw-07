
const elements = {
  newBtn: document.querySelector('[data-action="render"]'),
  deleteBtn: document.querySelector('[data-action="destroy"]'),
  boxRef: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

let size = 30;
const createBoxes = (amount) => {

  const box = document.createDocumentFragment();

  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `rgba( ${randomColor()} , ${randomColor()} , ${randomColor()} )`;
    box.append(div);
    size = size + 10;
  }
  boxes.append(box);
  elements.input.value = "";
};

const randomColor = () => {
  return Math.floor(Math.random() * 256);
};

function getAmount() {
  createBoxes(refs.input.value);
}
const destroyBoxes = () => {
  size = 30;
  refs.boxRef.innerHTML = "";
};

refs.newBtn.addEventListener("click", getAmount);
refs.deleteBtn.addEventListener("click", destroyBoxes);