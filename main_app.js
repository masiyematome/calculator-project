

const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorKeys = document.querySelector(".calculator-keys");

calculatorKeys.addEventListener("click", event => {
    if(event.target.matches("button")){
        const key = event.target;
        const keyAction = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNumber = calculatorScreen.textContent;

        if(!keyAction){
            if(displayedNumber == 0){
                calculatorScreen.textContent = keyContent;
            }

            else{
                calculatorScreen.textContent = displayedNumber + keyContent;
            }
        }

        else if(keyAction == "add" || keyAction == "multiply" || keyAction == "subtract" || keyAction == "divide"){
            console.log("Operator key");
        }

        else if(keyAction == "decimal"){
            calculatorScreen.textContent = displayedNumber + ".";
        }

        else if(keyAction == "clear"){
            console.log("Clear key");
        }

        else{
            console.log("Equal key");
        }
    }
})