"use strict";
 //function based on button clicked

let first=0;
let second=0;
let operator="";
	
function digits(digit){
		output.value+=digit;
}	
function operation(option){
		first=parseInt(output.value);
		operator=option;
		screenClear();
			
}
function screenClear(){
	output.value="";
}
function result(){
	if(operator=="+"){
		output.value=first+parseInt(output.value);
		display.value=first+second;

	}
	if(operator=="-"){
		output.value=first-parseInt(output.value);
		display.value=first+second;
	}
	if(operator=="x"){
		output.value=first*parseInt(output.value);
		display.value=first+second;
	}
	if(operator=="/"){
		output.value=first/parseInt(output.value);
		display.value=first+second;
	}
}
	




