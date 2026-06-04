//JS Fundamentals

// ============ Exercise 1 ============

"" + 1 + 0 //this will result in: "" + 1
console.log("" + 1 + 0); // 10 is a string not the number 10

/* this actually returned 10 because 
when JS sees a + with any string, it 
treats everything as string concatenation 
from that point left-to-right. Since "" comes first, 
everything after it gets joined as a 
string rather than added as numbers.*/

"" - 1 + 0 // this will return -1

true + false // this will return 1

!true // this will return false

6 / "3"

/* 
+ with a string is concatenation but
-, *, / always changes a string into a number
*/

"2" * "3" // returns 6

4 + 5 + "px" // returns 45px

// it actually returns 9px .... this confused me, ask in class //
