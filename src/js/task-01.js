const categoryRef = document.querySelectorAll('#categories .item');
const getCategoryQuantity = () =>
    
    console.log(`В списке ${categoryRef.length} категории.`);

const getItemsDescriprion = () => {
  categoryRef.forEach(item => {
    const nameRef = item.querySelector('.item h2');
    const listRef = item.querySelectorAll('ul li');

    console.log(`Категория: ${nameRef.textContent}`);
    console.log(`Количество элементов: ${listRef.length}`);
  });
};

getCategoryQuantity();
getItemsDescriprion();