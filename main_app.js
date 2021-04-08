
const calculator = {
    valueOnDisplay: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

const updateScreenDisplay = function(){
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnDisplay;
}

updateScreenDisplay();

const appendDigit = function(digit){
    const {valueOnDisplay , waitingForSecondOperand} = calculator;

    if(waitingForSecondOperand == true){
        calculator.valueOnDisplay = digit;
        calculator.waitingForSecondOperand = false;
    }

    else{
        if(valueOnDisplay == 0){
            calculator.valueOnDisplay = digit;
        }
    
        else{
            calculator.valueOnDisplay = calculator.valueOnDisplay + digit;
        }
    }

}

const appendDot = function(dot){
    if(calculator.valueOnDisplay.includes(dot)){
        return;
    }
    else{
        calculator.valueOnDisplay = calculator.valueOnDisplay + dot;
    }
}

const handleOperators = function(clickedOperator){
    const {firstOperand , valueOnDisplay , operator} = calculator;
    const storedValue = parseFloat(calculator.valueOnDisplay);

    if(firstOperand === null && !isNaN(storedValue)){
        calculator.firstOperand = storedValue;
    }

    else if(operator){
        const result = calculate(firstOperand,storedValue,operator);
        calculator.valueOnDisplay = String(result);
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = clickedOperator;
}

const calculate = function(firstOperand , secondOperand , operator){
    if(operator === '+'){
        return firstOperand + secondOperand;
    }
    else if(operator === '-'){
        return firstOperand - secondOperand;
    }
    else if(operator === '*'){
        return firstOperand * secondOperand;
    }
    else if(operator === '/'){
        return firstOperand / secondOperand;
    }

    return secondOperand;

}

const calculatorKeys = document.querySelector(".calculator-keys");
calculatorKeys.addEventListener("click",checkButtons);

function checkButtons(event){
    const {target} = event;

    Array.from(target.parentElement.children).forEach((operatorKey) => {
        operatorKey.classList.remove("is-clicked");
    })

    if(!(target.matches("button"))){
        return;
    }

    else{
        if(target.classList.contains("operator")){
            handleOperators(target.value);
            target.classList.add("is-clicked");
        }
        else if(target.classList.contains("decimal")){
            appendDot(target.value);
        }
        else if(target.classList.contains("equal-sign")){
            console.log('Equal key',target.value);
        }
        else if(target.classList.contains("clear")){
            console.log('Clear key',target.value);
        }
        else{
            appendDigit(target.value);
        }

        updateScreenDisplay();

    }
}