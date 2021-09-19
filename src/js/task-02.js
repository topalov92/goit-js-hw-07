const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector("#ingredients");

const newIngradients = ingredients.map((el) => {
  const newList = document.createElement("li");
  newList.textContent = el;

  return (el = newList);
});

ingredientsList.append(...newIngradients);