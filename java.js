// add function
function add(a,b){
    // make sure to create numbers from strings
    return +a + +b;
};

// subtract function
function subtract(a,b){
    // make sure to create numbers from strings
    return +a - +b;
};

// multiply function
function multiply(a,b){
    return +a * +b;
};

// divide function
function divide(a,b){
    return +a / +b;
};

// variables to update number, operator and number for calculator
let firstNumber = 0;
let operator = 0;
let secondNumber = 0;

// Operate function that takes an operator and two numbers


function operate(op,a,b){
    let result = undefined;
    // calls the right function for each operation
    if (op == "+"){
        result = add(a,b);
    } else if (op == "-"){
        result = subtract(a,b);
    }else if (op == "*"){
        result = multiply(a,b);
    } else if (op == "/"){
        result = divide(a,b);
    }else{
        result = false
    };

    return result;
};