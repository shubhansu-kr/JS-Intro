// Motive of the project is to control the counter 
// Layout : 
// counter : 
// increment button, decrement button 
// list of elements 

// Creating element through js 

// Step 1 : Catch the node where you want to append child 
const uList = document.getElementById('unordered-list');

// Step 2 : Create one element 
// const li = document.createElement('li');

// const textNode = document.createTextNode('Sentence ' + count);
// Now there are two ways to define our element 
// using the innerHTML/text 
// li.innerText = "help";

// li.appendChild(textNode);

// Now add the child to the parent node using append child 
// ul.appendChild(li);

// Catch counter for edit 
const counter = document.querySelector("#int-counter");
var count = 0;

// Step 1 : Catch buttons to add event listners
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

// Step 2 : Write function for event listner response 
const increment = () => {
    // We want to increase the counter by one unit. 
    count++;

    // Assign the new count to the counter element 
    counter.innerText = count;

    const li = document.createElement('li');
    li.setAttribute('data-counter', count) ;
    const textNode = document.createTextNode('Sentence '+ count);
    li.appendChild(textNode) ;
    uList.appendChild(li);

};

const decrement = () => {
    
    // Catch the li element 
    const li = uList.querySelector('[data-counter="'+count+'"]');
    li.remove() ;
    
    // We want to increase the counter by one unit. 
    count--;
    // Assign the new count to the counter element 
    counter.innerText = count;
};

// Step 3 : Add event listner(click) to the button 
incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);


