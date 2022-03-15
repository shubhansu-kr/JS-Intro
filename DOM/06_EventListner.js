var count = document.querySelector("#Counter");

var counter = 0;
const increaseCounter = () => {
    counter++;
    count.innerHTML = counter;
};

// Selecting the button element 
const button = document.querySelector("#increment");

// Adding eventLinstenr to count button 
button.addEventListener('click', increaseCounter);

