function afterLargest(numberArray: number[]) {
  if (numberArray.length < 2) return null;

  let numberA: number = numberArray[0];
  let numberB: number = numberArray[1];

  for (let i = 1; i < numberArray.length - 1; i += 1) {
    if (numberArray[i] > numberA) {
      numberA = numberArray[i];
      numberB = numberArray[i + 1];
    }
  }

  if (numberArray[numberArray.length - 1] > numberA) {
    return null;
  }
  return numberB;
}

export = afterLargest;
