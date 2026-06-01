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