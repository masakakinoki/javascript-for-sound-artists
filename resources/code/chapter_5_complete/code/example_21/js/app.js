"use strict";




var globalVariable = "global variable";

function testScope(argInput) {
    var testScopeLocalVariable = "local variable from testScope";
    //____The inner function has access to everything outside of it
    function innerFunction() {
        var localVariable = "local variable from innerFunction";
        console.log(argInput);
        console.log(globalVariable);
        console.log(testScopeLocalVariable);
        console.log(localVariable);
    }

    innerFunction();
}


testScope("argument input");


/*The console logs:
"argument input"
"global variable"
"local variable from testScope"
"local variable from innerFunction"
*/