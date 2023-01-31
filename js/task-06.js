const inputElem = document.querySelector("#validation-input");

const onInputBlure = () => {
    
    if (inputElem.value.length === Number(inputElem.dataset.length)) {
       inputElem.classList.remove('invalid');
       return inputElem.classList.add("valid");
    };

       return inputElem.classList.add("invalid");
};

inputElem.addEventListener("blur", onInputBlure);