

const numbersOnScreen = document.querySelector(".numbers-on-screen-input");
const calculatorKeys = document.querySelector(".calculator-keys");

calculatorKeys.addEventListener("click" , event => {
    if(event.target.matches("button")){
        
        const key = event.target;
        const keyAction = key.dataset.action;

        if(!(keyAction)){
            console.log("Number key");
        }

        else if(keyAction == "add" || keyAction == "divide" || keyAction == "multiply" || keyAction == "subtract"){
            console.log("Operator Key");
        }

        else if(keyAction == "decimal"){
            console.log("Decimal key");
        }

        else if(keyAction == "clear"){
            console.log("Clear key");
        }

        else {
            console.log("Equal key");
        }
    }
})