
const calculatorScreen = document.querySelector(".calculator-screen");
const calculatorKeys = document.querySelector(".calculator-keys");
const operatorKeys = document.querySelectorAll(".operator");


calculatorKeys.addEventListener("click" , (event)=> {
    const clickedKey = event.target;

    if(clickedKey.classList.contains("operator")){
        console.log("I am an operator key");
    }

    else if(clickedKey.classList.contains("equal-key")){
        console.log("I am an equal key");
    }

    else if(clickedKey.classList.contains("clear")){
        console.log("I am a clear key");
    }

    else if(clickedKey.classList.contains("decimal")){
        console.log("I am a decimal key");
    }

    else{
        console.log("I am a number key");
    }

})