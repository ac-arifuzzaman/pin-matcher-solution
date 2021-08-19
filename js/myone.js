function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('my-pin').value = pin;
};

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('input-number');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})

function verifybtn() {
    const pin = document.getElementById('my-pin').value;
    const inputNumber = document.getElementById('input-number').value;
    const successMessage = document.getElementById('notify-success')
    const failError = document.getElementById('notify-fail');
    if (pin == inputNumber) {
        successMessage.style.display = 'block';
        failError.style.display = 'none';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}