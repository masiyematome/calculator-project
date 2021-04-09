
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

const appendDigit = function(digit){
    const {valueOnDisplay} = calculator;

    if(calculator.waitingForSecondOperand == true){
        calculator.valueOnDisplay = digit;
        calculator.waitingForSecondOperand = false;
    }
    else{
        if(valueOnDisplay == "0"){
            calculator.valueOnDisplay = digit;
        }
        else{
            calculator.valueOnDisplay = valueOnDisplay + digit;
        }
    }

}

const appendDot = function(dot){
    const {valueOnDisplay} = calculator;

    if(valueOnDisplay.includes(dot)){
        return;
    }
    else{
        calculator.valueOnDisplay = valueOnDisplay + dot;
    }
}

const handleOperator = function(clickedOperator){
    const {firstOperand , valueOnDisplay , operator} = calculator;
    const storedValue = parseFloat(valueOnDisplay);

    if(operator && calculator.waitingForSecondOperand == true){
        calculator.operator = clickedOperator;
        return;
    }

    if(firstOperand === null && !isNaN(storedValue)){
        calculator.firstOperand = storedValue;
    }

    else if(operator){
        const result = calculate(firstOperand , storedValue , operator);
        calculator.valueOnDisplay = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = clickedOperator;

}

const calculate = function(firstOperand , secondOperand , operator){
    if(operator == '+'){
        return firstOperand + secondOperand;
    }
    else if(operator == '-'){
        return firstOperand - secondOperand;
    }
    else if(operator == '*'){
        return firstOperand * secondOperand;
    }
    else if(operator == '/'){
        return firstOperand / secondOperand;
    }

    return secondOperand;

}

const calculatorKeys = document.querySelector(".calculator-keys");
calculatorKeys.addEventListener("click", (event) => {
    const { target } = event;

    if (target.matches("button")) {

        Array.from(target.parentElement.children).forEach((btn) => {
            btn.classList.remove("is-clicked");
        })

        if (target.classList.contains("operator")) {
            handleOperator(target.value);
            target.classList.add("is-clicked");
        }

        else if (target.classList.contains("decimal")) {
            appendDot(target.value);
        }

        else if (target.classList.contains("equal-sign")) {
            calculate();
        }

        else if (target.classList.contains("clear")) {
            console.log("I am a clear key", target.value);
        }

        else {
            appendDigit(target.value);
        }

        updateScreenDisplay();

    }

    else {
        return;
    }
})