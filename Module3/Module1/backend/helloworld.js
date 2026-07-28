const Sentiment = require('sentiment')

// Tuesday 05 May Lesson - Lab Exercise 4

console.log('Hello Danica')

// this function returns the sum of two numbers
function sum(a, b) {
    return a + b
}

// Create the test
if (sum(2, 4) != 6){
    throw new Error('Test Failed');
}



// this function returns the subtraction of one number from another
function minus(a, b) {
    return a - b
}
console.log(minus(5,1))

// this functions divides two numbers
function divide(a, b) {
    return a / b
}
console.log(divide(5,1))

// this function multiplies two numbers
function multiply(a, b) {
    return a * b
}
console.log(multiply(5,1))

// this functions returns a greeting to the "name"
function greet(name) {
    return "Hello" + name + "!";
}
console.log(greet('Danica'))









// Thursday lesson 07 May 2026

let brands = [ 'Acne', 'Paloma', 'Simone', 'Oniksuka', 'Margiela'];
console.log(brands[0]); 


// Lab Exercise 6 - JSON 

const book = {
    title : "Invisible Women",
    description: "Exposing data bias in a world designed for men",
    author : "Caroline Criado Perez",
    numberPages: "411",
}

//printing
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.numberPages);

book.numberPages = 420;
console.log(book);

