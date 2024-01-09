function main () {
    function createPara () {
        let para = document.createElement ('p');
        para.textContent = "JS is single threaded language";
        document.body.appendChild (para);
    }
    
    function appendNewMsg () {
        let para = document.createElement('p');
        para.textContent = "Yes, JS is Synchronous and asyncronous language as well";
        document.body.appendChild (para);
    }
    
    createPara ();
    appendNewMsg ();
    
    
    // Observations
    // 1.Run-to-completion nature of code
    // 2.JS doesn't execute multiple lines at the same time
    // 3.Async code uses JS Event Loop
    // 4.Any Aysnc code handled by browser
    // 5.When this Async code is ready to be executed it is moved to the Queue where it waits until call stack is empty

    // setTimeOut ()
    setTimeout (function () {
        console.log ("Hello, Jee");
    }, 3000);
    
}


main ();