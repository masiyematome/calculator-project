
const calculator = {
    valueOnScreen : '0',
    firstOperand : null,
    waitingForSecondOperand : false,
    operator : null,
}

function updateScreenDisplay(){
    const calculatorScreen = document.querySelector(".calculator-screen");
    calculatorScreen.value = calculator.valueOnScreen;
}

updateScreenDisplay();

function appendDigit(digit){
    if(calculator.valueOnScreen == '0'){
        calculator.valueOnScreen = digit;
    }

    else{
        calculator.valueOnScreen = calculator.valueOnScreen + digit;
    }
}

function appendDot(dot){
    if(calculator.valueOnScreen.includes(dot)){
        return;
    }

    else{
        calculator.valueOnScreen = calculator.valueOnScreen + dot;
    }
}

const calculatorKeys = document.querySelector(".calculator-keys").addEventListener("click" , (event) =>{
    const {target} = event;

    if(!(target.matches("button"))){
        return;
    }

    else{
        if(target.classList.contains("operator")){
            console.log("I am an operator key" ,target.value);
        }
    
        else if(target.classList.contains("decimal")){
            appendDot(target.value);
        }
    
        else if(target.classList.contains("equal-sign")){
            console.log("I am an equal sign" ,target.value);
        }
    
        else if(target.classList.contains("clear")){
            console.log("I am a clear key" , target.value);
        }
    
        else {
            appendDigit(target.value);
        }

        updateScreenDisplay();

    }

})

