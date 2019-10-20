import secondLargest from './algorithmA';

const testArrayOne = [-38, -47, -42, 39, 17, -7, 1, 44, 32, -47, 50, 46, -35,
  -5, 10, 41, -15, 31, 26, 8, 19, -37, -32, 22, 49, 19, 43, 16, 5, -5,
  38, -37, -42, 21, -10, -21, -14, 7, 9, -10, 14, 41, -45, -19, 35, 23,
  -39, -17, -14, 21, 49, -1, -29, 17, 16, 18, 17, 27, 43, -26, 32, 35,
  32, 26, -17, -45, 17, -8, 27, 43, 45, 16, 16, -10, -24, 19, -40, 50,
  20, 3, 24, -38, -28, -49, 22, -21, 13, 48, 22, -6, 37, 20, -9, 14,
  9, -9, -49, 45, -8, 25];
const testArrayTwo = [1];

test('tests secondLargest function on typical array', () => {
  expect(secondLargest(testArrayOne)).toBe(50);
});

test('tests secondLargest function on a short array', () => {
  expect(secondLargest(testArrayTwo)).toBeNull;
});
