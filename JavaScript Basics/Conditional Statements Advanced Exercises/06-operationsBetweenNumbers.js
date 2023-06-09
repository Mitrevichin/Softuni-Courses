function operationsBetweenNumber(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let operator = input[2];

    let result = 0;

    if (operator === '+') {
        result = firstNumber + secondNumber;
        if (result % 2 === 0) {
            console.log(`${firstNumber} + ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} + ${secondNumber} = ${result} - odd`);
        }
        
    } else if (operator === '/') {
        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            result = firstNumber / secondNumber;
            console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`);
        }
    } else if (operator === '%') {
        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);
        } else {
            result = firstNumber % secondNumber;
            console.log(`${firstNumber} % ${secondNumber} = ${result}`);
        }
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
        if (result % 2 === 0) {
            console.log(`${firstNumber} - ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} - ${secondNumber} = ${result} - odd`);
        }
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
        if (result % 2 === 0) {
            console.log(`${firstNumber} * ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} * ${secondNumber} = ${result} - odd`);
        }
    }
    
}

operationsBetweenNumber(["112", "0", "/"]);