"use strict";

function doStuff(callback) {

    return callback();

}


doStuff(function() { //___Callback declaration is used directly

    return 3 + 3;

});