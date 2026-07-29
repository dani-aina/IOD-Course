//‍​‌‍==============𝗝𝗦 𝗜𝗻𝘁𝗲𝗿𝗺𝗲𝗱𝗶𝗮𝘁𝗲 𝗟𝗮𝗯=============

/*===========1 Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings. */

function ucFirstLetters(str) {
  let strArray = str.split(" "); // Split the string into an array of words
  for (let i = 0; i < strArray.length; i++) {
    strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1); //Using for loop to iterate through the array and capitalize the first letter of each wordS
  }
  return strArray.join(" ");
}

console.log(ucFirstLetters("hello world! this is a test string."));

/*===========2a Create a function truncate(str, max) that truncates a given string of text if its total
length is greater than the max length. It should return either the truncated text, with an`
ellipsis (...) added to the end if it was too long, or the original text otherwise. */

const str =
  "This is a very long sentence to test the truncating function in the console log";

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max) + "...";
  } else {
    return str;
  }
}
console.log(truncate(str, 20));

//2b Write another variant of the truncate function that uses a conditional operator.

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + "..." : str;
}

//===========3. Use the following animals array for the below tasks. Test each one by printing the result to the console.

const animals = ["Tiger", "Giraffe"];
//console.log(animals)

//a
animals.push("Rabbit", "Fox");

//b
animals.unshift("Lion", "Cheetah");

//c
animals.sort();
console.log(animals);

/*
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
*/
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}
replaceMiddleAnimal("Elephant");
console.log(animals);

/*
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case*/

function findMatchingAnimals(beginsWith) {
  const matchingAnimals = animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase()),
  );
  return matchingAnimals;
}
console.log(findMatchingAnimals("G"));
/*
4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like 'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a dash.
b) Create variants of the camelCase function that use different types of for loops, and c) with and without the conditional operator.
*/

const cssProp = "margin-left-width";

function camelCase(cssProp) {
  let transformedArray = [];
  let item = cssProp.split("-");
  transformedArray.push(item[0]);
  console.log(item);

  for (let i = 1; i < item.length; i++) {
    let upper = item[i];

    let firstLetter = upper.slice(0, 1).toUpperCase();
    let remainder = upper.slice(1);

    let newWord = firstLetter + remainder;
    console.log(newWord);

    transformedArray.push(newWord);
  }
  let joined = transformedArray.join("");
  console.log(joined);

  return joined;
}

//console.log(camelCase(cssProp))

//===========5. Decimal number operations in JavaScript can lead to unexpected results, as in the following:

let twentyCents = 0.2;
let tenCents = 0.1;
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//a
//console.log(fixedTwenty + fixedTen) <==== doesn't work because toFixed returns a string, not a number

//b
const float1 = 0.2;
const float2 = 0.1;

function currencyAddition(float1, float2) {
  return Number((float1 + float2).toFixed(2));
}

console.log(currencyAddition(float1, float2));

//c

function currencyOperation(float1, float2, operation) {
  if (operation === "+") {
    return Number((float1 + float2).toFixed(2));
  } else if (operation === "-") {
    return Number((float1 - float2).toFixed(2));
  } else if (operation === "*") {
    return Number((float1 * float2).toFixed(2));
  } else if (operation === "/") {
    return Number((float1 / float2).toFixed(2));
  }
}
console.log(currencyOperation(0.1, 0.2, "+"));

/* 6. Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/

const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

function unique(duplicatesArray) {
  const uniqueArray = [];
  for (let i = 0; i < duplicatesArray.length; i++) {
    if (!uniqueArray.includes(duplicatesArray[i])) {
      uniqueArray.push(duplicatesArray[i]);
    }
  }
  return uniqueArray;
}

console.log(unique(colours)); // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)); // [ 55, 84, 97, 63, 32, 91, 43 ]

/* 7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks. */

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

/* a) Write a function getBookTitle(bookId) that uses the find function to return the
title of the book object with the matching id.*/

function getBookTitle(bookId) {
  const book = books.find((currentBook) => currentBook.id === bookId);
  return book ? book.title : null;
}

console.log(getBookTitle(3)); // "1984"

/* b) Write a function getOldBooks() that uses the filter function to return all book
objects written before 1950.*/

function getOldBooks() {
  const oldBooks = books.filter((book) => book.year < 1950);
  return oldBooks;
}

console.log(getOldBooks()); // Returns an array of book objects written before 1950

/* c) Write a function addGenre() that uses the map function to add a new genre property
to all of the above books, with the value ‘classic’.*/

function addGenre() {
  const updatedBooks = books.map((book) => {
    return { ...book, genre: "classic" };
  });
  return updatedBooks;
}
/* 8. The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers. */

const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

// a) Create a new phoneBookDEF Map to store names beginning with D, E or F

const phoneBookDEF = new Map();
phoneBookDEF.set("Danica", "0466332228");
phoneBookDEF.set("Elaine", "0422113344");
phoneBookDEF.set("Frankie", "0411223344");

// b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

const phoneBookDEF = new Map([
  ["Danica", "0466332228"],
  ["Elaine", "0422113344"],
  ["Frankie", "0411223344"],
]);

// c) Update the phone number for Caroline

phoneBookABC.set("Caroline", "0412345678");

/* d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map*/

function printPhoneBook(contacts) {
  contacts.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}
printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

// e) Combine the contents of the two individual Maps into a single phoneBook Map

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// f) Print the contents of the combined phoneBook Map to the console

console.log(phoneBook);

// 9. Given the below salaries object, perform the following tasks.

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries

const salaryValues = Object.values(salaries);

let total = 0;
for (let i = 0; i < salaryValues.length; i++) {
  total += salaryValues[i];
}
console.log(total);
/* b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary*/

function topEarner(salaries) {
  let maxSalary = 0;
  let topEarnerName = "";
  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      topEarnerName = name;
    }
  }
  return topEarnerName;
}
console.log(topEarner(salaries)); // "Christina"

/* 10.The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following: */

const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// a) Print the total number of minutes that have passed so far today
