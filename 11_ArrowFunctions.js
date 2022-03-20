// Arrow functions 

function myFunc() {
    // This is a normal function 
    // js Hoist the function to the top 
};

const func = () => {
    // THis is an arrow function 
    // It's not hoisted by js 
    // thus we need to call the function after declaration 
};

// We can directly return a val too 
const isEven = (val) => val % 2 == 0;

console.log(isEven(23)); // false 

// can be used to modify var 
const increment = val => val * 2;

console.log(increment(32));

