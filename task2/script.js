const nameInput = document.forms.form.elements.name;
const emailInput = document.forms.form.elements.email;
const ageInput = document.forms.form.elements.age;
const radioInput = document.forms.form.elements.radioW;
const radio2Input = document.forms.form.elements.radioM;
const passwordInput = document.forms.form.elements.password;
const password2Input = document.forms.form.elements.password2;
const checkboxInput = document.forms.form.elements.checkbox;




document.querySelector('.form__submit').onclick = function (event) {
    let errors = [];
    function checkValidity(input) {
        let validity = input.validity;

        if (input.value === "") {
            errors.push('Введите значение');
            event.preventDefault();
        }

        if (validity.patternMismatch) {
            errors.push('Неверный формат заполнения (Пароль должен содержать: заглавные и строчные буквы, специальный символ(!@#$%^&*), цифры)');
            event.preventDefault();
        }

        if (validity.rangeOverflow) {
            let max = input.max;
            errors.push('Максимальное значение не может быть больше, чем ' + max);
            event.preventDefault();
        }

        if (validity.rangeUnderflow) {
            let min = input.min;
            errors.push('Минимальное значение не может быть больше, чем ' + min);
            event.preventDefault();
        }
    }

    checkValidity(nameInput);
    let errorDiv = document.querySelector('#error-name');
    errorDiv.innerHTML = errors.join('. \n');
    errors.length = 0;

    checkValidity(emailInput);
    let errorDiv2 = document.querySelector('#error-email');
    errorDiv2.innerHTML = errors.join('. \n');
    errors.length = 0;

    checkValidity(ageInput);
    let errorDiv3 = document.querySelector('#error-age');
    errorDiv3.innerHTML = errors.join('. \n');
    errors.length = 0;

    if (radioInput.checked || radio2Input.checked) {
        document.querySelector('#error-gender').textContent = '';
    } else {
        document.querySelector('#error-gender').textContent = 'Выберите кнопку';
        event.preventDefault();
    }

    checkValidity(passwordInput);
    let errorDiv4 = document.querySelector('#error-password');
    errorDiv4.innerHTML = errors.join('. \n');
    errors.length = 0;

    if (passwordInput.value != password2Input.value) {
        document.querySelector('#error-password2').textContent = 'Пароли не совпадают';
        event.preventDefault();
    } else {
        document.querySelector('#error-password2').textContent = '';
    }

    if (checkboxInput.checked) {
        document.querySelector('#error-checkbox').textContent = '';
    } else {
        document.querySelector('#error-checkbox').textContent = 'Нажмите кнопку согласия';
        event.preventDefault();
    }

    e.currentTarget.submit();



};