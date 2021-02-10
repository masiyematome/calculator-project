//Selectors

const numbersOnScreenInput = document.querySelector(".numbers-on-screen-input");
const calculatorBody = document.querySelector(".calculator-body");
const allButtons = document.querySelectorAll("button");

//Event Listeners

calculatorBody.addEventListener("click",sendToScreen);

//Functions

function sendToScreen(ev){
    const clickedButton = ev.target;

    allButtons.forEach(button => {
        numbersOnScreenInput.value = clickedButton.innerText;
    })
    

    if(clickedButton.classList.contains("clear")){
        numbersOnScreenInput.value = "0";
    }

}