"use strict";




var globalVariable = "global variable";

function doSomething(argInput) {
    var localVariable = "local variable";
    console.log(argInput);
    console.log(globalVariable);
    console.log(localVariable);
}

doSomething("argument input");
/*_________This outputs: "argument input" "global variable" "local variable"
because the function has access to its own scope and the outer scope.*/