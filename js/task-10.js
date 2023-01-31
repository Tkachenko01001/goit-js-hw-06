function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const boxes = document.querySelector('#boxes');
const btn = document.querySelectorAll("button[type='button']");
const divElem = document.querySelector('#boxes');

const createBoxes = () => {
  let amount = controls.firstElementChild.value;
  for (let i = 1; i <= amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = 20 + i * 10 + "px";
    newBox.style.height = 20 + i * 10 + "px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.insertAdjacentElement('beforeend', newBox);
  };
};

const clearBoxes = () => divElem.replaceChildren();

btn[0].addEventListener("click", createBoxes);
btn[1].addEventListener("click", clearBoxes);


