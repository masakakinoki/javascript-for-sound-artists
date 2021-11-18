"use strict";

function makeRecord(id) {
    var id = id; // Private data
    console.log(id + " is private data");
    var record = {};
    return record;
}
var myRecord = makeRecord("2323415432");
console.log(myRecord.id); // undefined. This is a property of the object, not the private data!