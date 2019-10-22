import fs from 'fs';
import afterLargest from './algorithmB';

const testArrayOne = fs.readFileSync('src/testArrayOne.csv', 'utf8').split('\n').map(Number);
const testArrayTwo = [1];
const testArrayThree = [1, 2, 3, 4, 5];

test('tests afterLargest function on typical array', () => {
  expect(afterLargest(testArrayOne)).toBe(86);
});

test('tests afterLargest function on a short array', () => {
  expect(afterLargest(testArrayTwo)).toBeNull;
});

test('tests afterLargest on an array with largest number last', () => {
  expect(afterLargest(testArrayThree)).toBeNull;
});
