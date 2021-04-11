

const calculator = {
    valueOnDisplay: '0',
    firstOperand: null,
    waitingForSecondOperand : false,
    operator: null, 
}

const updateScreenDisplay = function(){
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnDisplay;
}

updateScreenDisplay();

const appendDigit = function(digit){

    const {waitingForSecondOperand} = calculator;

    if(waitingForSecondOperand == true){
        calculator.valueOnDisplay = digit;
        calculator.waitingForSecondOperand = false;
    }

    else{
        if(calculator.valueOnDisplay == '0'){
            calculator.valueOnDisplay = digit;
        }
        else{
            calculator.valueOnDisplay = calculator.valueOnDisplay + digit;
        }
    }
    
}

const appendDot = function(dot){
    const {valueOnDisplay} = calculator;

    if(calculator.waitingForSecondOperand == true){
        calculator.valueOnDisplay = "0.";
        calculator.waitingForSecondOperand = false;
        return;
    }

    if(valueOnDisplay.includes(dot)){
        return;
    }
    else{
        calculator.valueOnDisplay = calculator.valueOnDisplay + dot;
    }
}

const handleOperators = function(clickedOperator){
    const {firstOperand , valueOnDisplay ,operator } = calculator;
    const storedValue = parseFloat(valueOnDisplay);

    if(operator && calculator.waitingForSecondOperand){
        calculator.operator = clickedOperator;
        return;
    }

    if(firstOperand === null && !isNaN(storedValue)){
        calculator.firstOperand = storedValue;
    }

    else if(operator){
        const result = calculate(firstOperand , storedValue , operator);
        calculator.valueOnDisplay = result;
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

    else{
        return secondOperand;
    }
}

const resetCalculator = function(){
    
    calculator.valueOnDisplay = 0;
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;

}

const calculatorKeys = document.querySelector(".calculator-keys");
calculatorKeys.addEventListener("click",(event) => {
    const {target} = event;

    if(!(target.matches("button"))){
        return;
    }

    else{
        if(target.classList.contains("operator")){
            handleOperators(target.value);
        }
        
        else if(target.classList.contains("decimal")){
            appendDot(target.value);
        }
        
        else if(target.classList.contains("clear")){
            resetCalculator();
        }

        else{
            appendDigit(target.value);
        }

        updateScreenDisplay();
    }
});

