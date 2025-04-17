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

// function that reads button pressed and display the number
function displayButton1(){
    const btn = document.querySelector("#one")
    btn.onclick = () => {
        display.textContent = "1";
        displayValue = "1";
    };
};
// function that reads button pressed and display the number
function displayButton2(){
    const btn = document.querySelector("#two")
    btn.onclick = () => {
        display.textContent = "2";
        displayValue = "2";
    };
};
// function that reads button pressed and display the number
function displayButton3(){
    const btn = document.querySelector("#three")
    btn.onclick = () => {
        display.textContent = "3";
        displayValue = "3";
    };
};
// function that reads button pressed and display the number
function displayButton4(){
    const btn = document.querySelector("#four")
    btn.onclick = () => {
        display.textContent = "4";
        displayValue = "4";
    };
};
// function that reads button pressed and display the number
function displayButton5(){
    const btn = document.querySelector("#five")
    btn.onclick = () => {
        display.textContent = "5";
        displayValue = "5";
    };
};
// function that reads button pressed and display the number
function displayButton6(){
    const btn = document.querySelector("#six")
    btn.onclick = () => {
        display.textContent = "6";
        displayValue = "6";
    };
};
// function that reads button pressed and display the number
function displayButton7(){
    const btn = document.querySelector("#seven")
    btn.onclick = () => {
        display.textContent = "7";
        displayValue = "7";
    };
};
// function that reads button pressed and display the number
function displayButton8(){
    const btn = document.querySelector("#eight")
    btn.onclick = () => {
        display.textContent = "8";
        displayValue = "8";
    };
};
// function that reads button pressed and display the number
function displayButton9(){
    const btn = document.querySelector("#nine")
    btn.onclick = () => {
        display.textContent = "9";
        displayValue = "9";
    };
};
// function that reads button pressed and display the number
function displayButton0(){
    const btn = document.querySelector("#zero")
    btn.onclick = () => {
        display.textContent = "0";
        displayValue = "0";
    };
};

let displayValue = "start up this carp";
const display = document.querySelector("#display")
display.textContent = displayValue;
displayButton1();
displayButton2();
displayButton3();
displayButton4();
displayButton5();
displayButton6();
displayButton7();
displayButton8();
displayButton9();
displayButton0();