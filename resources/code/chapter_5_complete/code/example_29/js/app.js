"use strict";

var freqs = [100, 200, 300];
var newFreqs = freqs.map(function(val) {
    return val += 100;
});

console.log(newFreqs); //__ [ 200, 300, 400 ]