// below are functions for basic calculator operations// 

function add(num1, num2) {
   return `${+num1 + +num2}`
}

function subtract(num1, num2) {
    return `${+num1 - +num2}`
}

function divide(num1, num2) {
    if(num2 === '0') {return 'error'}
   else {return `${+num1 / +num2}`}
}

function multiply(num1, num2) {
    return `${+num1 * +num2}`
}

function updateFirstOperandVar(number) {
    if(firstoperand.includes('.') && number === '.') return
    return firstoperand += number
}

function updateOperatorOperandVar(operator) {
    return operatorVariable = operator 
}

function updateSecondOperandVar(number) {
    if(secondoperand.includes('.') && number === '.') return
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
let result

expressionDisplay.textContent = firstoperand

numberbtncontainer.addEventListener('click', function(e) {
    switch (e.target.textContent) {
        case '1':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(1)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(1)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(1)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;

        case '2':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(2)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(2)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(2)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '3':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(3)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(3)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(3)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;

        case '4':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(4)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(4)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(4)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;

        case '5':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(5)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(5)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(5)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '6':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(6)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(6)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(6)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '7':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(7)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(7)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(7)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '8':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(8)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(8)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(8)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '9':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(9)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(9)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(9)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '0':
            if (operatorVariable === ' + ' ||
                operatorVariable === ' - ' ||
                operatorVariable === ' * ' ||
                operatorVariable === ' / '  
            ) { 
                if (result) {
              firstoperand = ''
              secondoperand = ''
              operatorVariable = ''
              result = ''
              updateFirstOperandVar(0)
              expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
              answerDisplay.textContent = '' }
              else {displaySecondVar(0)
              console.log(secondoperand) }   
               
            } else {
                if (firstoperand === '0') {
                   firstoperand = '' 
                }   
            updateFirstOperandVar(0)
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case 'Cl':
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
            } else {
            updateFirstOperandVar('.')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
    }
} )

operatorContainer.addEventListener('click', function(e) {
    switch (e.target.textContent) {
         case '+': 
            if (firstoperand && secondoperand) {
               result = operate(operatorVariable, firstoperand, secondoperand)
               if (result.length > 6) {firstoperand = Number(result).toFixed(4)}
               else {firstoperand = result}
               secondoperand = ''
               operatorVariable = ' + '
               result = ''
               answerDisplay.textContent = ''
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' + ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;

        case '-': 
            if (firstoperand && secondoperand) {
               result = operate(operatorVariable, firstoperand, secondoperand)
               if (result.length > 6) {firstoperand = Number(result).toFixed(4)}
               else {firstoperand = result}
               secondoperand = ''
               operatorVariable = ' - '
               result = ''
               answerDisplay.textContent = ''
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' - ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '*': 
            if (firstoperand && secondoperand) {
               result = operate(operatorVariable, firstoperand, secondoperand)
               if (result.length > 6) {firstoperand = Number(result).toFixed(4)}
               else {firstoperand = result}
               secondoperand = ''
               operatorVariable = ' * '
               result = ''
               answerDisplay.textContent = ''
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' * ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '/': 
            if (firstoperand && secondoperand) {
               result = operate(operatorVariable, firstoperand, secondoperand)
               if (result.length > 6) {firstoperand = Number(result).toFixed(4)}
               else {firstoperand = result}
               secondoperand = ''
               operatorVariable = ' / '
               result = ''
               answerDisplay.textContent = ''
               expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            } else {
            updateOperatorOperandVar(' / ')
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand }
            break;
            
        case '=': 
            if (firstoperand && (!operatorVariable || !secondoperand))  {
                answerDisplay.textContent = 'error'
            }  else {
            result = operate(operatorVariable, firstoperand, secondoperand)
            if (result.length > 6) {answerDisplay.textContent = Number(result).toFixed(4)}
            else {answerDisplay.textContent = result}
             }
            break;
            
        case 'CE':
            if (operatorVariable && secondoperand) {  
                secondoperand = secondoperand.split('').splice(0, secondoperand.length -1).join('')
                expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand      
            } else if (operatorVariable) {
                operatorVariable = ''
                expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand  
            }
            else {
            if (firstoperand.length === 1 ) {
                expressionDisplay.textContent = '0'
                firstoperand = '0'
                return }
            console.log(firstoperand)   
            firstoperand = firstoperand.split('').splice(0, firstoperand.length -1).join('') 
            expressionDisplay.textContent = firstoperand + operatorVariable + secondoperand
            }
            break;   
    }
})

let str = 'abc'
let nstr = str.split('').splice(0, 2).join('')
console.log(str)
console.log(nstr)
