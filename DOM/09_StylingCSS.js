// We can style html using the js methods 

var count = 0;
const counter = document.querySelector("#int-counter");
const uList = document.getElementById('unordered-list');

const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");

const increment = () => {
    count++;
    counter.innerText = count;

    const li = document.createElement('li');
    li.setAttribute('data-counter', count);

    // Customise the li tag 
    // li.setAttribute('attribute', 'value') ; // Attribute value pair 

    if (count % 2) {
        li.style.backgroundColor = 'yellow';
    } else {
        li.style.backgroundColor = 'blue';
    }

    const textNode = document.createTextNode('Sentence ' + count);
    li.appendChild(textNode);
    uList.appendChild(li);

};

const decrement = () => {

    const li = uList.querySelector('[data-counter="' + count + '"]');
    const num = parseInt(li.getAttribute('data-counter'), 10);
    li.remove();

    count--;
    counter.innerText = count;
};

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);


