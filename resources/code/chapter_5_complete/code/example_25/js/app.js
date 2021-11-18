"use strict";

function doStuff(callback) {
    return callback();
}

function addTwoNumbers() {
    return 2 + 2;
}
doStuff(addTwoNumbers); // 4