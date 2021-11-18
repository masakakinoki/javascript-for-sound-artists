"use strict";





//______________________BEGIN IIFE
(function run() {
    return "data";
}());
//______________________END IIFE

console.log(
    //______________________BEGIN IIFE
    (function run() {
        return "data";
    }())
    //______________________END IIFE
);