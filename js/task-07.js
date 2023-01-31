const inputElem = document.querySelector("#font-size-control");
const spanElem = document.querySelector("#text");

const onTextInput = () => {
    spanElem.style.fontSize = inputElem.value +'px';    
}

inputElem.addEventListener("input", onTextInput);