
const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorKeys = document.querySelector(".calculator-keys");

const calculator = {
    valueOnScreen : '12',
    firstOperand : null,
    waitingForSecondOperand : false,
    operator : null,
}

~function updateDisplay(){
    calculatorScreen.textContent = calculator.valueOnScreen;
}();