"use strict";


var blastSound = {
    name: "Blast"
};

function descriptor(message) {
    return this.name + ": " + message;
}

var describeBlastSound = descriptor.bind(blastSound);
console.log(describeBlastSound("This is an explosive sound")); //Blast: This is an explosive sound