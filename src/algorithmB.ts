function afterLargest(numberArray: number[]) {
    if (numberArray.length < 2) return null;

    let numberA: number = numberArray[0];
    let numberB: number = numberArray[1];

    for (var i = 1; i < numberArray.length - 1; i++) {
        if (numberArray[i] > numberA) {
            numberA = numberArray[i];
            numberB = numberArray[i + 1];
        }
    }

    if (numberArray[numberArray.length - 1] > numberA) return null;
    else return numberB;


}

export = afterLargest;