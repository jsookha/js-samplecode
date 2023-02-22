/*
    Program: Execute pieces of Code (executepieces.js) 
    Programmer: Jessel Sookha
    Date: 29 July 2022 
*/

/*
Please use the following file to run any source code from the 
files named code1 to code9

The reason is that there is so much code there to read and 
go through, if you attempt to run the code - it will be too 
much. 

So when you come across a piece of code you wish to run and see 
the result - copy the code from the the code file and paste it 
here after this comment 
*/

//the following code is from code8 
//=============================================================


let userAge;
let userCount = 0; 
let sumAge = 0; 
let avgAge = 0;

userAge = prompt ("Enter age [999 to stop]", ""); 

while (userAge !== '999'){
    sumAge = sumAge + +userAge; 
    userCount++; 
    userAge = prompt ("Enter age [999 to stop]", ""); 
} 

avgAge = sumAge / userCount; 
console.log("The average age is " + avgAge); 
//=============================================================

if (avgAge > 5){ 
    console.log("Average is above 5")
} 
else { 
    console.log("Average is below 5")
}

for (var count = 0; count < 10; count++){ 
    console.log(count);
}


let strOutput; 
switch (count) {
    case 0:
      strOutput = "It is 0";
      break;
    case 1:
      strOutput = "It is 1";
      break;
    case 2:
      strOutput = "It is 2";
      break;
    case 9:
      strOutput = "It is 9";
      break;
    case 10:
      strOutput = "It is 10";
      break;
}
console.log (strOutput); 

let fruits = ["Apple", "Orange", "Plum"];

console.log( fruits[0] ); // Apple
console.log( fruits[1] ); // Orange
console.log( fruits[2] ); // Plum