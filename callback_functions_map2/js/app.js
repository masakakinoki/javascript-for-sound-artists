"use strict";

let freqs = [100, 200, 300];
let newFreqs = freqs.map(function (val, index, arr) {
  let message = "current value: " + val + " current index: " + index + " array: " + arr;
  console.log(message);
  return val;
});