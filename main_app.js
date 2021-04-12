
const calculator = {
    valueOnDisplay: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updateScreenDisplay() {
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnDisplay;
}

updateScreenDisplay();

function appendDigit(digit) {
    const { valueOnDisplay, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand == true) {
        calculator.valueOnDisplay = digit;
        calculator.waitingForSecondOperand = false;
    }

    else {
        if (valueOnDisplay == '0') {
            calculator.valueOnDisplay = digit;
        }
        else {
            calculator.valueOnDisplay += digit;
        }
    }

}

function appendDot(dot) {
    const { valueOnDisplay } = calculator;

    if(calculator.waitingForSecondOperand == true){
        calculator.valueOnDisplay = '0.';
        calculator.waitingForSecondOperand = false;
        return;
    }

    else{
        if (valueOnDisplay.includes(dot)) {
            return;
        }
        else {
            calculator.valueOnDisplay += dot;
        }
    }

}

function handleOperators(clickedOperator) {
    const { firstOperand, valueOnDisplay ,operator } = calculator;
    const storedValue = parseFloat(valueOnDisplay);

    if(operator && calculator.waitingForSecondOperand == true){
        calculator.operator = clickedOperator;
        return;
    }

    if (firstOperand === null && !isNaN(storedValue)) {
        calculator.firstOperand = storedValue;
    }

    else if(operator){
        const result = calculate(firstOperand , storedValue , operator);
        calculator.firstOperand = String(result);
        calculator.valueOnDisplay = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = clickedOperator;

}

function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;

        case '-':
            return firstOperand - secondOperand;

        case '*':
            return firstOperand * secondOperand;

        case '/':
            return firstOperand / secondOperand;

        default:
            return secondOperand;

    }
}

function clearCalculator(){
    calculator.valueOnDisplay = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

const calculatorKeys = document.querySelector(".calculator-keys");
calculatorKeys.addEventListener("click", keys);

function keys(event) {
    const { target } = event;

    if (!(target.matches("button"))) {
        return;
    }

    else {
        switch (target.classList[1]) {
            case 'operator':
                handleOperators(target.value);
                break;

            case 'decimal':
                appendDot(target.value);
                break;

            case 'clear':
                clearCalculator();
                break;

            case 'digit':
                appendDigit(target.value);
                break;
        }

        updateScreenDisplay();

    }
}

