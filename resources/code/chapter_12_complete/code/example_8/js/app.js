"use strict";

function makeRecord(id) {
    var id = id;
    var record = {};
    record.getId = function() {
        return id;
    };
    record.setId = function(newId) {

        if (typeof newId === "string" && newId.length === 10) {
            id = newId;
        } else {
            throw ("id must be a ten-digit string");
        }

    };
    return record;
}

var myRecord = makeRecord("9876543210");
myRecord.getId(); // 9876543210
myRecord.setId("1000000001");
myRecord.getId(); //  1000000001