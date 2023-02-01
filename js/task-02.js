const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector('ul#ingredients');

let fragment = new DocumentFragment();

for (const value of ingredients) {
  const itemOfIngredientsEl = document.createElement('li');
  itemOfIngredientsEl.classList.add('item');
  itemOfIngredientsEl.textContent += value;
  fragment.appendChild(itemOfIngredientsEl);
}

document.querySelector('ul#ingredients').append(fragment);