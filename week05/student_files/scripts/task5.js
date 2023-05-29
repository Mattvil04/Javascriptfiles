/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const currentDate1 = new Date();
// Step 2: Declare another variable to hold the day of the week
const dayOfWeek = currentDate1.getDay();
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed
let message = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    message = 'Hang in there!';
  }
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = 'Woohoo! It is the weekend!';
  }
/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let secondMessage = '';

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
    case 0:
      secondMessage = 'Sunday';
      break;
    case 1:
      secondMessage = 'Monday';
      break;
    case 2:
      secondMessage = 'Tuesday';
      break;
    case 3:
      secondMessage = 'Wednesday';
      break;
    case 4:
      secondMessage = 'Thursday';
      break;
    case 5:
      secondMessage = 'Friday';
      break;
    case 6:
      secondMessage = 'Saturday';
      break;
  }
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.getElementById('message1').textContent = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById('message2').textContent = secondMessage;
/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(temples) {
    const templesElement = document.getElementById('temples');
    templesElement.innerHTML = '';
  
    temples.forEach((temple) => {
      const article = document.createElement('article');
      const h3 = document.createElement('h3');
      const h4Location = document.createElement('h4');
      const h4Dedicated = document.createElement('h4');
      const img = document.createElement('img');
  
      h3.textContent = temple.templeName;
      h4Location.textContent = temple.location;
      h4Dedicated.textContent = temple.dedicated;
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
  
      article.appendChild(h3);
      article.appendChild(h4Location);
      article.appendChild(h4Dedicated);
      article.appendChild(img);
  
      templesElement.appendChild(article);
    });
  }
  
// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
  
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
templeList = await response.json();

// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
output(templeList);
}
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
    const templesElement = document.getElementById('temples');
    templesElement.innerHTML = '';
  }
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy() {
    reset();
  
    const sortByElement = document.getElementById('sortBy');
    const sortByValue = sortByElement.value;
  
    let sortedTemples = [];
  
    if (sortByValue === 'templeName') {
      sortedTemples = templeList.sort((a, b) => a.templeName.localeCompare(b.templeName));
    } else if (sortByValue === 'location') {
      sortedTemples = templeList.sort((a, b) => a.location.localeCompare(b.location));
    } else if (sortByValue === 'dedicated') {
      sortedTemples = templeList.sort((a, b) => a.dedicated.localeCompare(b.dedicated));
    }
  
    output(sortedTemples);
  }
// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
document.getElementById('sortBy').addEventListener('change', sortBy);