"use strict";
function secondLargest(numberArray) {
    if (numberArray.length < 2)
        return null;
    var numberA;
    var numberB;
    if (numberArray[0] > numberArray[1]) {
        numberA = numberArray[0], numberB = numberArray[1];
    }
    else {
        numberB = numberArray[0], numberA = numberArray[1];
    }
    for (var i = 2; i < numberArray.length; i += 1) {
        if (numberArray[i] > numberA) {
            numberB = numberA;
            numberA = numberArray[i];
        }
        else if (numberArray[i] > numberB) {
            numberB = numberArray[i];
        }
    }
    return numberB;
}
module.exports = secondLargest;
