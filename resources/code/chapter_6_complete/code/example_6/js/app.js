"use strict";



var effects = {
    reverbs: {
        hall: "Hall reverb being used",
        plate: "Plate reverb being used",
        smallRoom: "Small room reverb being used"
    },
    guitar: {
        flange: "Flange being used",
        wahWah: "Wah wah being used"
    }
};

var updatedEffects = Object.create(effects);
console.log(updatedEffects.reverbs); //returns reverb object
console.log(updatedEffects.guitar); // returns guitar object

updatedEffects.filters = {
    lowPass: "Lowpass filter being used",
    highPass: "Highpass filter being used"
};
console.log(updatedEffects.filters); // returns filter object
console.log(effects.filters); // undefined