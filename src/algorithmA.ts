function secondLargest(numberArray: number[]) {
  if (numberArray.length < 2) return null;

  let numberA: number;
  let numberB: number;

  if (numberArray[0] > numberArray[1]) {
    [numberA, numberB] = numberArray;
  } else {
    [numberB, numberA] = numberArray;
  }

  for (let i = 2; i < numberArray.length; i += 1) {
    if (numberArray[i] > numberA) {
      numberB = numberA;
      numberA = numberArray[i];
    } else if (numberArray[i] > numberB) {
      numberB = numberArray[i];
    }
  }

  return numberB;
}

export = secondLargest;
