"use strict";

function Record(id) {
    var id = id;
    this.getId = function() {
        return id;
    };

    this.setId = function(newId) {

        if (typeof newId === "string" && newId.length === 10) {
            id = newId;
        } else {
            throw ("id must be a ten digit string");
        }

    };
}


var myRecord = new Record("9876543210");
myRecord.getId(); // 9876543210

myRecord.setId("0123456789");
myRecord.getId(); //0123456789