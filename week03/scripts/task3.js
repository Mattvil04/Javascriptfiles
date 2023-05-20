/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2
function add(number1, number2){
    let sum = Number(number1) + Number(number2);
    return sum
}
// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers(){
    let number1 = document.querySelector('#addend1').value;
    let number2 = document.querySelector('#addend2').value;
    let sum = add(number1, number2);
    return sum
}

// Step 4: Assign the return value to an HTML form element with an ID of sum
let addednumber = document.querySelector('#sum');
addednumber.value = addNumbers();
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
let addButton = document.getElementById('addNumbers');
addButton.addEventListener('click', function(){
    addednumber.value = addNumbers();
});
// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(number1, number2){
    let subtract = Number(number1) - Number(number2);
    return subtract
}


function subtractNumbers(){
    let number1 = document.querySelector('#minuend').value;
    let number2 = document.querySelector('#subtrahend').value;
    let difference = subtract(number1, number2);
    return difference
}


let subtractednumber = document.querySelector('#difference');
subtractednumber.value = subtractNumbers();


let addButton2 = document.getElementById('subtractNumbers');
addButton2.addEventListener('click', function(){
    subtractednumber.value = subtractNumbers();
});



// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
function multiply(number1, number2){
    return  multiplicationnum = Number(number1) * Number(number2);
} 
function multiplyNumbers(){
    let number1 = document.querySelector('#factor1').value;
    let number2 = document.querySelector('#factor2').value;
    return multiplication = multiply(number1, number2);
}
let multipliednumber = document.querySelector('#product');
multipliednumber.value = multiplyNumbers();
let addButton3 = document.getElementById('multiplyNumbers');
addButton3.addEventListener('click', function(){
    multipliednumber.value = multiplyNumbers();
});
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2){
    let divide = Number(number1) / Number(number2);
    return divide
}
function divideNumbers(){
    let number1 = document.querySelector('#dividend').value;
    let number2 = document.querySelector('#divisor').value;
    let division = divide(number1, number2);
    return division
}
let dividednumber = document.querySelector('#quotient');
dividednumber.value = divideNumbers();
let addButton4 = document.getElementById('divideNumbers');
addButton4.addEventListener('click', function(){
    dividednumber.value = divideNumbers();
});
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();
// Step 2: Declare a variable to hold the current year
let currentYear;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
let yearElement = document.querySelector('#year');
yearElement.innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,,13,14,15,16,17,18,19,20,21,22,23,24,25]
// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
const oddElement = document.getElementById('odds');
oddElement.innerHTML = oddNumbers;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
const evenElement = document.getElementById('evens');
evenElement.innerHTML = evenNumbers;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sumOfArray;
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const multipliedNumbers = numbersArray.map(number => number * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedNumbers;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumOfMultiplied = numbersArray.map(number => number * 2).reduce((accumulator, currentValue) => accumulator + currentValue);
const sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied;