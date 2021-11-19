"use strict";

let freq1 = 1200,
    freq2 = 570,
    freq3 = 100,
    freq4 = 1500;

let frequencyList = [freq1, freq2, freq3, freq4];

let filteredFrequencies = frequencyList.filter(function(value){
return value >= 1000;
});

console.log(filteredFrequencies);