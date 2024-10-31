// exercise one array map 

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
// by using the array prototype.map add other array that hold to doube number 
const doubled = nums.map(num => num * 2);
console.log(doubled);

// excrcise two array destructuring add const wich hold the topping first ans second

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
// hold first and second same as the exsample;

const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping);
console.log(secondTopping);

// excrcise three destructing object 
const car = {
    make: 'Audi',
    model: 'q5',
  };
   const { make , model } = car;
   console.log(car.make);
   console.log(car.model);

   // excrcise four applying spread to the array. 

   const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
   const controversialPizzaToppings = [ ...pizzaToppings ];
   console.log(controversialPizzaToppings); 

// excrcise five applying spread to the object 
 
const car = {
    make: 'Audi',
    model: 'q5',
  };
   const myCar = { ...car, model: "q7" };
   console.log(car);
   console.log(myCar);

   // excrcise six dynamic key in objects: 
   // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.
 
const userProfile = {};
const propertyName = "username";
userProfile[propertyName] = "MikeQ";
console.log(userProfile); 
 
// excrcise seveen 
// add the files 
 

// excrcise eight default parameters 
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:
// 1. `cat`
// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.
function describeCat(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);

}
describeCat();

// excrcise nine the ternary operator 
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

if (pizza === 'tasty') {
  console.log('yum');
} else {
  console.log('yuck');
}

// by using the ternary 
let pizza = "tasty";
pizza === 'tasty' ? console.log("yum") : console.log("yuck");


// excrcise ten boolean gates 
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result
const localLangConfig = null;
const LANG = localLangConfig || 'en';

console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);

// exircise 11 Optional chaining

// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
  let cat;  adventurer.cat?.age;
  
  console.log(cat);
  





