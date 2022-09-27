'use strict'
let number = 1;


while (number <101) {
    if ((number % 3 ==0) && (number % 5 ==0)) {
        console.log("FizzBuzz");
      }
    else if(number % 3 ==0) {
        console.log("Buzz");
      }
    else if(number % 5 ==0) {
        console.log("Buzz");
      }
      else{
        console.log(number);
      }
  
  number++;
  }