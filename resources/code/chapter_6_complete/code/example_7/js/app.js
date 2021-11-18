"use strict";



var synth = {
    name: "Moog",
    polyphony: 32
};

var synthWithFilters = Object.create(synth); // clone synth
// synthWithFilters now has access to name and polyphony properties
synthWithFilters.filters = ["lowpass", "highpass", "bandpass"]; // add property
//  The original synth object does not have access to the filters property.
var synthWithFiltersAndEffects = Object.create(synthWithFilters); // clone synthWithFilters
synthWithFiltersAndEffects.effects = ["reverb", "flange", "chorus"]; // add property
// Neither the synth object nor the synthWithFilters object have access to the effects property