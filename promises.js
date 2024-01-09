// When we want to execute some code parallely in the background then we use promises
let meraPromise = new Promise (function (resolve, reject) {
    // setTimeout (function () {
    //     console.log ("Hello World");
    // }, 3000);

    resolve (143);

    // or
    // reject (new Error ("Bhaisaab error aaye hain"));
});

meraPromise.then ((value) => { console.log (value) });
meraPromise.catch ( (error) => { console.log ("Received an error") });

console.log ("First");


let meraPromise1 = new Promise ( function (resolve, reject) {
    setTimeout ( () => {
        console.log ("setTimeout1 started");
    }, 2000);
    resolve (true);
});

meraPromise1.then (() => {
    let meraPromise2 = new Promise (function (resolve, reject) {
        resolve ("meraPromise2 resolved");
    });
    return meraPromise2;
}).then ( (value) => { console.log (value); });


