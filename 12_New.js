// Lets test new concept in js 
// We already know what happens when we define a constructor 
// and it's preety obvious that when a lang has a constructor concept 
// it also has a new concept 

const arr = [3, 5, 23, 5, 2,];

console.log(arr);
const newArray = arr.map(function (element) {
    console.log(element);
    return 100;
});

console.log(newArray);
console.log(arr); // still the same 

//It's equivalent to 
const newArr1 = [];
for (const it of arr) {
    console.log(it);
    newArr1.push(it);
};

// Filter 
// We already know how filter works \
const evenArr = arr.filter((element) => { return element % 2 == 0 });

console.log(evenArr); // Prints the even elements of arr 

