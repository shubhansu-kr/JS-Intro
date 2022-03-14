// Dom - Document object model 
// It is a refrence to the HTML world for js 


// QuerySelector takes the input same as css. 
const heading = document.querySelector('h1');
console.log(heading);

// Innertext is used to change the text content of the seclected query 
heading.innerText = "Hello Shubh";

// Queryselectorall is used to target all the elements while the 
// queryselector targets only the first element it finds from the top

const row = document.querySelectorAll('tr');
// it gives a node list back 
console.log(row);

// Loop through the node list to make changes to all the elements 
row.forEach(element => {
    element.innerText = "hello world ";
});
