"use strict";

function loopFromTo(start, end) {
  console.log(start);
  if (start < end) {
    return loopFromTo(start += 1, end)
  }
}

loopFromTo(1, 8);