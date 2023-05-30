/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let thenameElement = document.querySelector('#name');

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = 'Matias Villacis';


// Step 3: declare and instantiate a variable to hold the current year
let theyearElement = document.querySelector('#year');

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = '2023';

// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').src = 'images/img1.jpg';



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let food = ['Pizza', 'Tacos', 'Hot dog']
let thefoodElement = document.querySelector('#food');

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = food;

// Step 3: declare and instantiate a variable to hold another favorite food
let food2 = 'Sushi'

// Step 4: add the variable holding another favorite food to the favorite food array
food.push(food2)

// Step 5: repeat Step 2

document.querySelector('#food').innerHTML = food;
// Step 6: remove the first element in the favorite foods array
food.shift()

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = food;
// Step 8: remove the last element in the favorite foods array
food.pop(2)

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = food;



