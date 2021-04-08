

const calculator = {
    valueOnDisplay: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

const updateScreenDisplay = function () {
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnDisplay;
}

updateScreenDisplay();

const appendDigit = function (digit) {

    const {valueOnDisplay , waitingForSecondOperand} = calculator;

    if(waitingForSecondOperand == true){
        calculator.valueOnDisplay = digit;
        calculator.waitingForSecondOperand = false;
    }

    else{
        if (calculator.valueOnDisplay == "0") {
            calculator.valueOnDisplay = digit;
        }
        else {
            calculator.valueOnDisplay = calculator.valueOnDisplay + digit;
        }
    }

}

const appendDot = function (dot) {
    if (calculator.valueOnDisplay.includes(dot)) {
        return;
    }
    else {
        calculator.valueOnDisplay = calculator.valueOnDisplay + dot;
    }
}

const handleOperator = function (clickedOperator) {

    const { firstOperand, valueOnDisplay, operator } = calculator;
    const storedValue = parseFloat(valueOnDisplay);

    if (firstOperand === null && !isNaN(storedValue)) {
        calculator.firstOperand = storedValue;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = clickedOperator;

}

const calculatorKeys = document.querySelector(".calculator-keys")
    .addEventListener("click", (event) => {
        const { target } = event;

        if (!(target).matches("button")) {
            return;
        }

        else {
            if (target.classList.contains("operator")) {
                handleOperator(target.value);
            }

            else if (target.classList.contains("decimal")) {
                appendDot(target.value);
            }

            else if (target.classList.contains("equal-sign")) {
                console.log("I am an equal key", target.value);
            }

            else if (target.classList.contains("clear")) {
                console.log("I am a clear key", target.value);
            }

            else {
                appendDigit(target.value);
            }

            updateScreenDisplay();
        }
    })