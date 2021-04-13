
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

    if (calculator.waitingForSecondOperand == true) {
        calculator.valueOnDisplay = '0.';
        calculator.waitingForSecondOperand = false;
        return;
    }

    else {
        if (valueOnDisplay.includes(dot)) {
            return;
        }
        else {
            calculator.valueOnDisplay += dot;
        }
    }

}

function handleOperators(clickedOperator) {
    const { firstOperand, valueOnDisplay, operator } = calculator;
    const storedValue = parseFloat(valueOnDisplay);

    if (operator && calculator.waitingForSecondOperand == true) {
        calculator.operator = clickedOperator;
        return;
    }

    if (firstOperand === null && !isNaN(storedValue)) {
        calculator.firstOperand = storedValue;
    }

    else if (operator) {
        const result = calculate(firstOperand, storedValue, operator);
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

function clearCalculator() {
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

document.addEventListener("keypress", keyPresses);

function keyPresses(event) {

    const { target } = event;

    if (target.code === 97) {
        console.log("You pressed 1");
    }

}



document.onkeyup = function (event) {
    const clickedKey = event;
    const clickedKeyCode = clickedKey.keyCode;

    switch (clickedKeyCode) {

        case 96:
            appendDigit('0');
            break;

        case 97:
            appendDigit('1')
            break;

        case 98:
            appendDigit('2')
            break;

        case 99:
            appendDigit('3');
            break;

        case 100:
            appendDigit('4');
            break;

        case 101:
            appendDigit('5');
            break;

        case 102:
            appendDigit('6');
            break;

        case 103:
            appendDigit('7');
            break;

        case 104:
            appendDigit('8');
            break;

        case 105:
            appendDigit('9');
            break;

        case 110:
            appendDot('.');
            break;

    }

    updateScreenDisplay();

}