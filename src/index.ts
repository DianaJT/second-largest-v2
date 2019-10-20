import secondLargest from './algorithmA';
import afterLargest from './algorithmB';

const numberArray: number[] = [];
for (let i = 3; i < process.argv.length; i += 1) {
  numberArray.push(Number(process.argv[i]));
}

if (process.argv[2] === '-a') {
  console.log(secondLargest(numberArray));
}
if (process.argv[2] === '-b') {
  console.log(afterLargest(numberArray));
}
