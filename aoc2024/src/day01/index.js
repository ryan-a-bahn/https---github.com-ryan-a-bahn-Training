import run from "aocrunner";

const parseInput = (rawInput) => rawInput;

const part1 = (rawInput) => {
  const input = parseInput(rawInput);
  let splitInputs = input.match(/\d+/g);
  splitInputs = splitInputs.map(Number);
  const row1 = [];
  const row2 = [];
  splitInputs.forEach((value, index) => {
    (index % 2 !== 0) ? row1.push(value) : row2.push(value);
  });
  row1.sort();
  row2.sort();
  let sum = 0;
  row1.forEach((value, index) => {
    sum = sum + Math.abs(value - row2[index]);
  });
  return sum;
};

const part2 = (rawInput) => {
  const input = parseInput(rawInput);
  let splitInputs = input.match(/\d+/g);
  splitInputs = splitInputs.map(Number);
  const row1 = [];
  const row2 = [];
  splitInputs.forEach((value, index) => {
    (index % 2 !== 0) ? row1.push(value) : row2.push(value);
  });
  row1.sort();
  row2.sort();
  let sum = 0;
  row1.forEach((value1, index1) => {
    let count = 0;
    row2.forEach((value2, index2) => {
      if (value1 === value2){
        count = count + 1;
      }
    });
    sum = sum + (count * value1);
  });
  return sum;
};



run({
  part1: {
    tests: [
       {
         input: `1   2   3   4   5\n2   3   4   5   6`,
         expected: 5,
       },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
