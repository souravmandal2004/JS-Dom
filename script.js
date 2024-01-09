// Performace of code


// normal code 
// const t1 = performance.now ();


// for (let i=1; i<=100; i++) {
//     let newElement = document.createElement ('p');
//     newElement.textContent = "This is para " + i;

//     document.body.appendChild (newElement);
// }
// const t2 = performance.now ();

// console.log ("Performance : " + (t2-t1) + " ms");



// Optimised code
// const t1 = performance.now ();

// let newDiv = document.createElement ("div");

// for (let i=1; i<=100; i++) {
//     let newElement = document.createElement ('p');
//     newElement.textContent = "This is para " + i;

//     newDiv.appendChild (newElement);
// }
// document.body.appendChild (newDiv);

// const t2 = performance.now ();

// console.log ("Took : " + (t2-t1) + " ms");



// More optimised

const t1 = performance.now ();
let fragment = document.createDocumentFragment (); 
for (let i=1; i<=100; i++) {
        let newElement = document.createElement ('p');
        newElement.textContent = "This is para " + i;
    
        fragment. appendChild (newElement);
}
document.body.appendChild (fragment);         // 1 Reflow, 1 Repaint

const t2 = performance.now ();

console.log ("This took: " + (t2-t1) + "ms");  