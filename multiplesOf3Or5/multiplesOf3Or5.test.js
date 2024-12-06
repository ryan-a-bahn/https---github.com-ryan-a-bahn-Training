const sumOfMultiples = require('./multiplesOf3Or5');

test('Finds answer to limit of 10:', () => {
  expect(sumOfMultiples(10)).toBe(23);
});

test('Finds answer to limit of 20:', () => {
  expect(sumOfMultiples(20)).toBe(231);
});

test('Finds answer to limit of 2:', () => {
  expect(sumOfMultiples(2)).toBe(0);
});