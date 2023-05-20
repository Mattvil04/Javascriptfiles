/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {}
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo.name = "Matias"
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = 'images/img1.jpg'
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ["Pizza", "Tacos", "Sushi"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ["Play the guitar", "Play soccer", "Hang out with friends"];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.push({ place: "Pampa", length: "18 years" });
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.push({ place: "Pomasqui", length: "1 year" });

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let namevalue = document.querySelector('#name');
namevalue.innerHTML = myInfo.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = myInfo.photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
let altValue = document.querySelector('#photo')
altValue.alt = myInfo.name
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
const favoriteFoodsList = document.createElement("ul");

myInfo.favoriteFoods.forEach((food) => {
  const listItem = document.createElement("li");
  listItem.textContent = food;
  favoriteFoodsList.appendChild(listItem);
});

document.body.appendChild(favoriteFoodsList)
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

const favoriteFoodsUl = document.getElementById("favorite-foods");
favoriteFoodsUl.appendChild(favoriteFoodsList);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
const hobbiesList = document.createElement("ul");

myInfo.hobbies.forEach((hobby) => {
  const listItem1 = document.createElement("li");
  listItem1.textContent = hobby;
  hobbiesList.appendChild(listItem1);
});

document.body.appendChild(hobbiesList);
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
const hobbiesUl = document.getElementById("hobbies");
hobbiesUl.appendChild(hobbiesList);
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
const placesLivedList = document.createElement("dl");

myInfo.placesLived.forEach((place) => {
  const term = document.createElement("dt");
  term.textContent = place.place;
  placesLivedList.appendChild(term);

  const definition = document.createElement("dd");
  definition.textContent = place.length;
  placesLivedList.appendChild(definition);
});

const placesLivedDl = document.getElementById("places-lived");
placesLivedDl.appendChild(placesLivedList);