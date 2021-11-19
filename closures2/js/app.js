"use strict";

function effectsBox() {
  let component = "pulled out component";
  return function openEffectsBox(){
    return component;
  };
}

let getComponent = effectsBox();
console.log(getComponent());