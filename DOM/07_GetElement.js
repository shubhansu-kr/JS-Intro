const count = document.getElementById('counter');
// select element by id 

// Queryselector all 
const list = document.querySelectorAll('li');

const listElements = document.getElementById('List')

// create an element 
const li = document.createElement('li');
const textNode = document.createTextNode('Line 1 ');
li.appendChild(textNode);

// append element 
listElements.appendChild(li);

// Or we can just do
// li.innerHTML = "hello" ;
// listELements.appendChild(li) ;