/*
0. Start 
1. Declarations 
    num intNum
    num intHigh 
    num intCount 
2.  intHigh = -1 
3.  for intCount = 1 to 3 Step 1 
        output "Enter Number"
        input intNum 
        if intNum > intHigh then 
            intHigh = intNum 
        end if 
    end for 
4.  output intHigh 
5. Stop
*/

// Start 
let intNum
let intHigh 
let intCount 

intHigh = -1 

for (intCount = 1; intCount <= 3; intCount++) { 
    intNum = prompt ("Enter Number")
    if (intNum > intHigh){ 
        intHigh = intNum
    }
}

console.log("The highest number entered is " + intHigh)

// Stop