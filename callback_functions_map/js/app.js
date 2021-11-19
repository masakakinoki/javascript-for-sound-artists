"use strict";

let freqs = [100, 200, 300];
let newFreqs = freqs.map(function (val) {
  return val + 100;
});

console.log(newFreqs);