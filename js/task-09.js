function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnElem = document.querySelector('.change-color');
const colorValue = document.querySelector('.color');
const bodyColor = document.querySelector('body')

const onChangeColor = () => {
colorValue.textContent = getRandomHexColor();
bodyColor.style.backgroundColor = colorValue.textContent;
}

btnElem.addEventListener("click", onChangeColor);

