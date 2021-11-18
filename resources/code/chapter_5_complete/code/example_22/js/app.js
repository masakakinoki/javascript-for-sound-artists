"use strict";




function effectsBox() {
    var component = "Pulled out component";
    return function openEffectsBox() {
        return component
    }
}
var getComponent = effectsBox(); //___stores "openEffectsBox" function in a variable.
console.log(getComponent()); // "Pulled out component"