// below are functions for basic calculator operations// 

function add(num1, num2) {
   return `${+num1 + +num2}`
}

function subtract(num1, num2) {
    return `${+num1 - +num2}`
}

function divide(num1, num2) {
    return `${+num1 / +num2}`
}

function multiply(num1, num2) {
    return `${+num1 * +num2}`
}

function updateFirstOperandVar(number) {
           firstoperand = '' 
   return  firstoperand += number
}

function updateOperatorOperandVar(operator) {
    return operatorVariable = operator 
}

function updateSecondOperandVar(number) {
    return secondoperand += number
}

function displaySecondVar(number) {
      updateSecondOperandVar(number)
      expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
}

function operate(operator, num1, num2) {
   switch (operator) {
     case ' + ': 
     return add(num1, num2)
     break;

     case ' - ':
     return subtract(num1, num2)
     break;

     case ' / ':
     return divide(num1, num2)
     break;

     case ' * ':
     return multiply(num1, num2)
     break;
   }
}


let firstoperand = '0'
let operatorVariable = ''
let secondoperand = ''
let numberbtncontainer = document.querySelector('.numberbtn-container')
let display = document.querySelector('.display')
let operatorContainer = document.querySelector('.operator-btn')
let expressionDisplay = document.querySelector('.expression-display')
let answerDisplay = document.querySelector('.answer-display')

expressionDisplay.textContent = firstoperand

numberbtncontainer.addEventListener('click', function(e) {
    switch (e.target.textContent) {
        case '1':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(1)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(1)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;

        case '2':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(2)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(2)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '3':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(3)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(3)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;

        case '4':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(4)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(4)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;

        case '5':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(5)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(5)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '6':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(6)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(6)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '7':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(7)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(7)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '8':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(8)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(8)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '9':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(9)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(9)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case '0':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar(0)
               console.log(secondoperand)
            } else 
            updateFirstOperandVar(0)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
        case 'C':
            updateFirstOperandVar('CL')
            firstoperand = '0'
            secondoperand = ''
            operatorVariable = ''
            expressionDisplay.textContent = firstoperand
            answerDisplay.textContent = ''
            break;
            
        case '.':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) {
               displaySecondVar('.')
               console.log(secondoperand)
            } else 
            updateFirstOperandVar('.')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            break;
            
    }
} )

operatorContainer.addEventListener('click', function(e) {
    switch (e.target.textContent) {
         case '+': 
            if (firstoperand && secondoperand) {
               let result = operate(operatorVariable, firstoperand, secondoperand) 
               firstoperand = result;
               secondoperand = ''
               operatorVariable = ' + '
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' + ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;

        case '-': 
            if (firstoperand && secondoperand) {
               let result = operate(operatorVariable, firstoperand, secondoperand) 
               firstoperand = result;
               secondoperand = ''
               operatorVariable = ' - '
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' - ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '*': 
            if (firstoperand && secondoperand) {
               let result = operate(operatorVariable, firstoperand, secondoperand) 
               firstoperand = result;
               secondoperand = ''
               operatorVariable = ' * '
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' * ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '/': 
            if (firstoperand && secondoperand) {
               let result = operate(operatorVariable, firstoperand, secondoperand) 
               firstoperand = result;
               secondoperand = ''
               operatorVariable = ' / '
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' / ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '=': 
            let result = operate(operatorVariable, firstoperand, secondoperand)
            answerDisplay.textContent = result
            break;    
    }
})

