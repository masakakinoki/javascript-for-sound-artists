"use strict";

var freq1 = 1200,
    freq2 = 570,
    freq3 = 100,
    freq4 = 1500;


var frequencyList = [freq1, freq2, freq3, freq4];

var filteredFrequencies = frequencyList.filter(function(value) {
    return value >= 1000;
});

console.log(filteredFrequencies); //___ [1200,1300]