"use strict";




function effectsBox() {
    var counter = 0;
    var component = "Pulled out component";
    return function openEffectsBox() {
        return component + " " + (counter += 1);
    };
}
var getComponent = effectsBox(); //___stores "openEffectsBox" function in a variable.

getComponent(); // "Pulled out component 1"
getComponent(); // "Pulled out component 2"
getComponent(); // "Pulled out component 3"
getComponent(); // "Pulled out component 4"