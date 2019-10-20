import secondLargest from "./algorithmA"
import afterLargest from "./algorithmB"

let numberArray: number[] = [];
for (var i = 3; i < process.argv.length; i++) {
    numberArray.push(Number(process.argv[i]));
};

if (process.argv[2] === '-a') {
    console.log(secondLargest(numberArray));
};
if (process.argv[2] === '-b') {
    console.log(afterLargest(numberArray));
};