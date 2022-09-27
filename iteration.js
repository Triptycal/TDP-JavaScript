'use strict';

// ITERATION

// loops

// FOR
// uses a counter
// runs while a condition is met
for(let i = 0; i < 3; i++) {
    console.log(`i = ${i}`);
}

// WHILE
// works with booleans
// run until a condition is no-longer true
let condition = true;
let increment = 0;

while(condition === true) {
    console.log(`increment = ${increment}`);
    increment++;

    if(increment === 3) {
        condition = false;
    }
}


// DO-WHILE
// like a while loop
// but it will ALWAYS run at least once
let a = false;

do {
    console.log("run forest run");
} while(a === true);


// SWITCH CASES
// run until a break or return
// can be much more effective than large if-else if statements
let num = 0;

switch(num) {
    case 0:
        console.log("number is zero");
        break;
    case 1:
        console.log("we are number one");
    case 4:
        console.log("we're at 4");
    case 10:
        console.log("we made it to ten!")
        break;
    default:
        console.warn("not here");
}
