// ES6 // ES2015

const arr1 = [3, 5, 2, 2];
const arr2 = [6, 3, 2, 5];

// If we want to combine array 1 and 2 
// and do this 

const arr3 = [arr1, arr2];
console.log(arr3);

// It creates an array of array, since it pases arr1 as one element 
// inorder to pass the element of arr1 into arr3 we need to destructure it 

const arr4 = [...arr1, ...arr2];
console.log(arr4);

// Similarly in objects 

const obj1 = {
    name: 'Shubh',
    section: 'K21GP'
};

const obj2 = {
    roll: 21,
    age: 18
};

const data = {
    obj1,
    obj2
};

console.log(data);

const data1 = {
    ...obj1,
    ...obj2
};

console.log(data1);