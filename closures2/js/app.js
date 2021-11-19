"use strict";

let globalVariable = "global variable";

function testScope(argInput) {
  let testScopeLocalVariable = "local variable from testscope";
  function innerFunction(){
    let localVariable = "local variable from innerFunction";
    console.log(argInput);
    console.log(globalVariable);
    console.log(testScopeLocalVariable);
    console.log(localVariable);  
  }
  innerFunction();
}

testScope("argument input");