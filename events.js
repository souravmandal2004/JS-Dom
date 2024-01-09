// EventTarget --> Interface --> Top-level entity
// It has 3 methods:
// 1.addEventListener ()
// 2.removeEventListener ()
// 3.dispatchEvent ()

// addEventListener () --> syntax --> <event-target>.addEventListener (<event-to-listen-for>, <function-to-run-when-event-happened>)

function redColor () {
    button.style.color = "red";
}
let button = document.querySelector ('button');
button.addEventListener ('click', redColor);

// removeEventListener () --> to remove the listener the function must be same 
button.removeEventListener ("click", redColor);


// prevent default action
let anchorTag = document.querySelector("a");
anchorTag.addEventListener ('click', function (event) {
    event.preventDefault ();
    console.log ("Mazaaa aaaya..");
});

