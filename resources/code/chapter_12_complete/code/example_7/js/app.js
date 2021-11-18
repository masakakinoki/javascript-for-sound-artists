"use strict";
function makeRecord(id) {
    var id = id;
    var record = {};
    record.getId = function() { // getter
        return id;
    };
    return record;
}

var myRecord = makeRecord("1121210937");

myRecord.getId(); // 1121210937