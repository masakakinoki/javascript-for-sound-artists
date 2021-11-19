"use strict";

function effectsBox() {
  let counter = 0;
  let component = "pulled out component";
  return function openEffectsBox(){
    return component + " " + (counter += 1);
  };
}

let getComponent = effectsBox();
console.log(getComponent());
console.log(getComponent());
console.log(getComponent());
console.log(getComponent());