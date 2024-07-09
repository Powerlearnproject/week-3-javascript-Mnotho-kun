const inputFeild = document.getElementById('Input-Field')


function ShowInput(value){
  inputFeild.value += value
}

function Clear(){
    inputFeild.value =''
}

function ShowTotal(){
    try{
        inputFeild.value = eval(inputFeild.value)
    }catch{
        inputFeild.value ='error'
    }
}
ShowInput()

// Declare variables of different data types
let stringVar = "Hello, World!";
let numberVar = 42;
let booleanVar = true;

console.log("String Variable: " + stringVar);
console.log("Number Variable: " + numberVar);
console.log("Boolean Variable: " + booleanVar);


// Simple JavaScript Calclations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Error: Division by zero");
        return null;
    }
    return a / b;
}

console.log("Addition: " + add(5, 3));    
console.log("Subtraction: " + subtract(5, 3)); 
console.log("Multiplication: " + multiply(5, 3));
console.log("Division: " + divide(6, 3));     
console.log("Division by Zero: " + divide(6, 0));

// DOM Manipulation

const Circlecolor = document.getElementById('Circle-color')
const ButttonElements = document.getElementById('Btn')

ButttonElements.addEventListener('click',() => {
   let randomRed = Math.floor(Math.random()*256)
   let randomBlue = Math.floor(Math.random()*256)
   let randomGreen = Math.floor(Math.random()*256)

   let RandomColor = `rgb(${randomRed},${randomBlue},${randomGreen})`

   Circlecolor.style.backgroundColor = RandomColor
})

