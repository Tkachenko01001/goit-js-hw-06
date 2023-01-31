const form = document.querySelector('.login-form');
function onSubmit (event) {
    event.preventDefault();
    const {
        elements: { email, password }
      } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Всі поля повинні бути заповнені.");
    };
    const completedForm = {
        email: `${form.elements.email.value}`,
        password: `${form.elements.password.value}`,
    };
    console.log(completedForm);
    event.currentTarget.reset();
}

form.addEventListener("submit", onSubmit);
