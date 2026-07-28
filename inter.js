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
length is greater than the max length. It should return either the truncated text, with an
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

//===========3
const animals = ["Tiger", "Giraffe"];
//console.log(animals)

//a
animals.push("Rabbit", "Fox");
//console.log(animals)

//b
animals.unshift("Lion", "Cheetah");
//console.log(animals)

//c
animals.sort();
//console.log(animals)

/*
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
*/

//e

//===========4
//a
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

//===========5

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
