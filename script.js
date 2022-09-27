'use strict'
console.log("Hello world!");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("%c" + text, "color: black; background-color: white; font-size: 20px; padding: 5px;");

console.log("%c" + text + "%c" + text, "color:red;", "color:yellow;");

console.log("This is now %c the end of the exercises.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

console.log(typeof(a));// will return null
console.log(typeof(b));// will return String
console.log(typeof(c));// will return number
console.log(typeof(d));// will return boolean
console.log(typeof(e));// will return object.

let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = totalMoney - moneyPaidSoFar;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);