const divElement = document.querySelector('#counter');
let value = divElement.querySelector('#value');
let counterValue = 0;
const handleClickIncrement = () => {
    counterValue += 1;
    return value.textContent = counterValue;
};

const handleClickDecrement = () => {
    counterValue -= 1;
    return value.textContent = counterValue;
}

divElement.lastElementChild.addEventListener("click", handleClickIncrement);
divElement.firstElementChild.addEventListener("click", handleClickDecrement);
