const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listElem = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const itemElem = document.createElement('li');
  itemElem.textContent = `${ingredient}`;
  itemElem.classList.add('item');
  listElem.append(itemElem);
});