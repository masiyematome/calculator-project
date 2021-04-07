const calculatorkeys = document.querySelector(".calculator-keys");

const calculator = {
    valueOnScreen: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updateDisplay() {
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnScreen;
}

updateDisplay();

function appendDigit(digit) {
    if (calculator.valueOnScreen == '0') {
        calculator.valueOnScreen = digit;
    }

    else {
        calculator.valueOnScreen = calculator.valueOnScreen + digit;
    }
}


calculatorkeys.addEventListener("click", (event) => {
    const { target } = event;

    if (!(target.matches("button"))) {
        return;
    }

    else {
        if (target.classList.contains("operator")) {
            console.log('I am an operator', target.value);
        }

        else if (target.classList.contains("decimal")) {
            console.log("I am a decimal key", target.value);
        }

        else if (target.classList.contains("equal-sign")) {
            console.log("I am an equal key", target.value);
        }

        else if (target.classList.contains("clear")) {
            console.log("I will clear this thing broer", target.value);
        }

        else {
            console.log("I am a decimal key");
        }

        appendDigit(target.value);
        updateDisplay();
        
    }
})

/**Playing around with code**/

