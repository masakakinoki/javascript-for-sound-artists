"use strict";

var globalVariable = "global variable";

function doSomthing(argInput) {
  var localVariable = "local variable";
  console.log(argInput);
  console.log(globalVariable);
  console.log(localVariable);
}

doSomthing("argument input");