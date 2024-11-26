const sumOfMultiples = require('./multiplesOf3Or5');

test('Finds answer to limit of 10:', () => {
  expect(sumOfMultiples(10)).toBe(23);
});