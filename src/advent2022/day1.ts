export const solution = (input: string, n: number): number => {
  const lines = input.split('\n');
  let currentTotal = 0;
  const elkCalories = [];
  for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== '') {
      currentTotal += parseInt(lines[i], 10);
    } else {
      elkCalories.push(currentTotal);
      currentTotal = 0;
    }
  }

  return findTopMaxCalories(elkCalories, n);
};

const findTopMaxCalories = (array: number[], n: number): number => {
  if (n === 0) {
    return 0;
  }
  const value = array.reduce(
    (acc, currentValue, index) => {
      if (acc.max < currentValue) {
        return { index, max: currentValue };
      }
      return acc;
    },
    { max: 0, index: -1 },
  );
  array.splice(value.index);

  return value.max + findTopMaxCalories(array, n - 1);
};
