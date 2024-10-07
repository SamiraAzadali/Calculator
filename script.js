let buttons = document.querySelectorAll('.button');

let input = document.querySelector('.input');

for(let i =0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
        let buttonValue = buttons[i].textContent;
        if(buttonValue === "C"){
            clearResult();
        } else if(buttonValue === "="){
            calculate();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult(){
    input.value = "";
}

function appendValue(buttonValue){
    input.value += buttonValue;
}

function calculate(){
    input.value = eval(input.value);
}
