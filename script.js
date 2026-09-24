// below are functions for basic calculator operations// 
function add(num1, num2) {
   return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function divide(num1, num2) {
    return num1 / num2
}
function multiply(num1, num2) {
    return num1 * num2
}

let firstoperand
let operator
let secondoperand
let numberbtncontainer = document.querySelector('.numberbtn-container')
let display = document.querySelector('.display')

function operate(operator, num1, num2) {
   switch (operator) {
     case 1: 
     add(num1, num2)
     break;

     case 2:
     subtract(num1, num2)
     break;

     case 3:
     divide(num1, num2)
     break;

     case 4:
     multiply(num1, num2)
     break;
   }
}

numberbtncontainer.addEventListener('click', function(e) {
    console.log(e.target)
    switch (e.target.textContent) {
        case '1':
            updateFirstOperandVar(1)
            display.textContent = firstoperand
            break;

        case '2':
            updateFirstOperandVar(2)
            display.textContent = firstoperand
            break;
            
        case '3':
            updateFirstOperandVar(3)
            display.textContent = firstoperand
            break;

        case '4':
            updateFirstOperandVar(4)
            display.textContent = firstoperand
            break;

        case '5':
            updateFirstOperandVar(5)
            display.textContent = firstoperand
            break;
            
        case '6':
            updateFirstOperandVar(6)
            display.textContent = firstoperand
            break;
            
        case '7':
            updateFirstOperandVar(7)
            display.textContent = firstoperand
            break;
            
        case '8':
            updateFirstOperandVar(8)
            display.textContent = firstoperand
            break;
            
        case '9':
            updateFirstOperandVar(9)
            display.textContent = firstoperand
            break;
            
        case '0':
            updateFirstOperandVar(0)
            display.textContent = firstoperand
            break;
            
        case 'C':
            updateFirstOperandVar('CL')
            display.textContent = firstoperand
            break;
            
        case '.':
            updateFirstOperandVar('.')
            display.textContent = firstoperand
            break;
                
    }
} )

function updateFirstOperandVar(number) {
   return  firstoperand = number
}


