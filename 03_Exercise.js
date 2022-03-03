// Basic calculator with parameters
// In this lab, we will practice for loop with an array 
// and functions and conditionals.Your task for this lab is to:

// Create a function named performMath that accepts three 
// parameters - number1, number2 and operation
// If operation is '+', add the numbers and return the result
// If operation is '*', multiply the numbers and return the 
// result

// All the best

// write your code below

function performMath(a, b, c) {
    if (c == "+") {
        return a + b;
    }
    else if (c == "*") {
        return a * b;
    }
    else {
        return "Invalid operattion " ;
    }
}
