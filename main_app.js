const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorKeys = document.querySelector(".calculator-keys");

calculatorKeys.addEventListener("click", (event) => {
    if(event.target.matches("button")){
        
        const key = event.target;
        const keyAction = key.dataset.action;
        const keyContent = key.innerText;

        Array.from(key.parentElement.children).forEach(individualKey => {
            individualKey.classList.remove("is-depressed");
        })

        if(!keyAction){
            if(calculatorScreen.innerText == 0){
                calculatorScreen.innerText = keyContent;
            }

            else{
                calculatorScreen.innerText = calculatorScreen.innerText + keyContent;
            }
        }

        else if(keyAction == "add" || keyAction == "subtract" || keyAction == "divide" || keyAction == "multiply"){
            key.classList.add("is-depressed");
            
        }

        else if(keyAction == "decimal"){
            calculatorScreen.innerText = calculatorScreen.innerText + ".";
        }

        else if(keyAction == "calculate"){
            console.log("Equal sign");
        }

        else {
            console.log("Clear key");
        }

;    }
})