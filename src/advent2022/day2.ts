const point = {
  A: {
    X: 3,
    Y: 6,
    Z: 0,
  },
  B: {
    X: 0,
    Y: 3,
    Z: 6,
  },
  C: {
    X: 6,
    Y: 0,
    Z: 3,
  },
  selectedPoint: {
    X: 1,
    Y: 2,
    Z: 3,
  },
};

export const solution1 = (input: string): number => {
  const lines = input.split('\n');
  let total = 0;
  for (let i = 0; i < lines.length; i++) {
    const options = lines[i].split(' ');
    total += point[options[0]][options[1]] + point.selectedPoint[options[1]];
  }
  return total;
};
const point2 = {
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
};
export const solution2 = (input: string): number => {
  const lines = input.split('\n');
  let total = 0;
  for (let i = 0; i < lines.length; i++) {
    const options = lines[i].split(' ');
    total +=
      [1, 2, 3][(point2[options[0]] + point.selectedPoint[options[1]]) % 3] +
      point2[options[1]];
  }
  return total;
};
