"use strict";

var blastSound = {
    name: "Blast"
};

function descriptor(message) {
    return this.name + ": " + message;
}

var describeBlastSound = descriptor.bind(blastSound, "This is an explosive sound");
console.log(describeBlastSound()); //Blast: This is an explosive sound