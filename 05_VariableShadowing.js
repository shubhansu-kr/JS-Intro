// The nearest var shadows the farther variables .

const myAge = 18;
if (true) {
    let myAge; // Just a declaration is enough to shadow a var 
    console.log(myAge); // Undefined 
}
console.log(myAge); // 18   