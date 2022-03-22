// Promises and fetch in Js 

// fetch is an API which fetches the data from another file 
const PromiseObject = fetch('./12_New.js');

// Now this object is supposed to get some data which is fetched from the 
// new.js file 

// Now, 'data' is the fetched output 

PromiseObject.then(data => {
    // Operate the fetched data 
    console.log(data) ;
})

// Incomplete lecture -> Broken Link 