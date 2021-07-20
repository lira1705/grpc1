exports.calculate = (operator, first, second) => {
    if (isValid(operator, first, second)) {
        return getValue(operator, first, second)
    }
    else
        return null
}

function isValid(operator, first, second) {
    return isValidOperator(operator) && isValidNumbers(first, second)
}

function isValidOperator() {
    return operator > 0 && operator <= 4;
}

function isValidNumbers(number1, number2) {
    return !isNaN(number1) && !isNaN(number2)
}

function getValue(operator, first, second) {
    switch(operator) {
        case 1: {
            return first + second;
        }
        case 2: {
            return first - second;
        }
        case 3: {
            return first * second;
        }
        case 4: {
            return first / second;
        }
        default: {
            return first + second
        }
    }
}