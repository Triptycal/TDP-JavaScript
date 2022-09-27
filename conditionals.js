'use strict';

// Conditionals

// Truthy and Falsey

// Things that are Falsey

let z = false;
z = 0;
z = "";

// unresolved
// undefined
// null
// NaN - not a number

// IF, ELSE IF and ELSE statements
// check a condition
// run a code block if the condition is met

let a = 1;

if (a == 0) {
    console.log("sunshine");
} else if (a != 2) {
    console.log("moonlight");
} else {
    console.log("boogie");
}

// Ternary IF
// shorthand version of the if / else

let x = 2;

if (x == 2) {
    console.log("x is 2");
} else {
    console.log("x is not 2");
}

x == 2 ? console.log("x is 2") : console.log("x is not 2");

// Equality and Type

"1" == 1 ? console.log(true) : console.log(false);

// strictly equals operator
"1" === 1 ? console.log(true) : console.log(false);

if ( 1 == 1 && 2 == 2 ){
    console.log("this works");
}

if (1 == 2 || 2 == 2 ) {
    console.log("only one of these has to work")
}
