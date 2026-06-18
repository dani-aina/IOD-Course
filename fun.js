//JS Fundamentals

// ============ Exercise 1 ============

"" + 1 + 0; //this will result in: "" + 1
console.log("" + 1 + 0); // 10 is a string not the number 10

/* this actually returned 10 because 
when JS sees a + with any string, it 
treats everything as string concatenation 
from that point left-to-right. Since "" comes first, 
everything after it gets joined as a 
string rather than added as numbers.*/

"" - 1 + 0; // this will return -1

true + false; // this will return 1

!true; // this will return false

6 / "3";

/* 
+ with a string is concatenation but
-, *, / always changes a string into a number
*/

"2" * "3"; // returns 6

4 + 5 + "px"; // returns 45px
// it actually returns 9px .... this confused me, ask in class //

"$" + 4 + 5; // returns $45

"4" - 2; // returns 2

"4px" - 2; // returns NaN

"  -9  " + 5; // returns -4
// actually returns -9   5 becaue " -9 " is a string

"  -9  " - 5; // returns -14

null + 1; // returns 1

undefined + 1; // returns 1
// actually returns NaN because undefined has no numeric value

undefined == null; // true

undefined === null; // false

" \t \n" - 2; //Whitespace strings (spaces, tabs \t, newlines \n) convert to 0 when used with math operators, so 0 - 2 = -2.

// ============ Exercise 2 ============
/*Which of the below are not giving the right answer? 
Why are they not correct? How can we fix them?*/

let three = "3";
let four = "4";
let thirty = "30";

let addition = three + four;
console.log(addition);
// this returns 34 in the console because they are declared as strings rather than numbers
//  and when js sees the + sign, it is treated as a string, not a number...concatanation

/* Since both are strings, JavaScript compares them alphabetically (like a dictionary), not numerically.
It compares the first character: "3" vs "4" — and since "3" comes before "4" alphabetically, "30" is considered less than "4".*/

// ============ Exercise 3 ============

/*console will print: 
"#2 zero is true"
"negative is true"
"positive is true"*/

// ============ Exercise 4 ============

let a = 2,
  b = 3;
let result = `${a} + ${b} is `;

result += a + b < 10 ? "less than 10" : "greater than 10";

// The += operator adds the two strings together.

// ============ Exercise 5 ============

// function expression syntax

function getGreeting(name) {
  return "Hello" + name + "!";
}

console.log(getGreeting("Danica"));

// arrow function syntax

const sayHi = (name) => console.log(name);

sayHi("Danica");

// ============ Exercise 6 ============

const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase(person) {
    return person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.";
  },
};
inigo.greeting(westley);
inigo.greeting(rugen);

// ============ Exercise 7 ============
/*`const basketballGame = {
    score: 0,
    freeThrow() {
        this.score++;
}, 
printScore() {
    console.log('Score' + '')
},

basket() {
        this.score += 2;
},
threePointer() {
        this.score += 3;
},   
halfTime() {
        console.log('Halftime score is '+this.score);
    }
}
//modify each of the above object methods to enable function chaining as below:
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
*/

// ============ Exercise 8 ============

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

for (let key in sydney) {
  console.log("key: " + key);
  console.log("value: " + sydney[key]);
}

// new city object

const melbourne = {
  name: "Melbourne",
  population: 5_435_590,
  state: "VIC",
  founded: "30 August, 1835",
  timezone: "Australia/Melbourne",
};

for (let key in melbourne) {
  console.log("key: " + key);
  console.log("value: " + melbourne[key]);
}

// ============ Exercise 9 ============
//a
const teamSports = ["Hockey", "Cricket", "Volleyball"];

let moreSports = [...teamSports];
teamSports.unshift("Skateboarding", "Swimming");
teamSports.push("Squash");

console.log(teamSports);

//b
let dog1 = 'Bingo';
let dog2 = dog1;

dog2 = 'Lassie';
console.log(dog1)
console.log(dog2)

//c
let cat1 = {
    name: 'Fluffy',
    breed: 'Siberian'
};

let cat2 = {...cat1};

cat2.name = 'Charlotte'
cat2.breed = 'DSH'

console.log(cat1)
console.log(cat2)

//d
//because in the dog1 and dog2 case, it is a primitive and dog1 remains untouched. In the cat1 and cat2 cause, objects do change

//e - shallow copy using ...

// ============ Exercise 10 ============

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
}