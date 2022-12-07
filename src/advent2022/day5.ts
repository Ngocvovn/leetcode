const parseStack = (input: string): [string[]?] => {
  const lines = input.split('\n');
  const matrix: [string[]?] = [];
  for (let i = 1; i < lines[1].length; i += 4) {
    for (let j = lines.length - 2; j > 0; j--) {
      const value = lines[j][i];
      const arrayIndex = Math.floor(i / 4);
      if (value !== ' ') {
        if (matrix[arrayIndex]) matrix[arrayIndex].push(value);
        else matrix[arrayIndex] = [value];
      }
    }
  }
  return matrix;
};

export const solution = (input: string, command: string) => {
  const matrix = parseStack(input);
  const commandParse = command.split('\n');
  for (let i = 0; i < commandParse.length; i++) {
    const args = commandParse[i].split(' ');
    move9000(
      matrix,
      parseInt(args[1]),
      parseInt(args[3]) - 1,
      parseInt(args[5]) - 1,
    );
  }
  return matrix.reduce((acc, value) => acc.concat(value[value.length - 1]), '');
};

const move9000 = (
  matrix: [string[]?],
  numberOfStep: number,
  from: number,
  to: number,
) => {
  for (let i = 0; i < numberOfStep; i++) {
    matrix[to].push(matrix[from].pop());
  }
};
const move9001 = (
  matrix: [string[]?],
  numberOfStep: number,
  from: number,
  to: number,
) => {
  matrix[to] = matrix[to].concat(
    matrix[from].splice(matrix[from].length - numberOfStep, numberOfStep),
  );
};

export const solution2 = (input: string, command: string) => {
  const matrix = parseStack(input);

  const commandParse = command.split('\n');
  for (let i = 0; i < commandParse.length; i++) {
    const args = commandParse[i].split(' ');
    move9001(
      matrix,
      parseInt(args[1]),
      parseInt(args[3]) - 1,
      parseInt(args[5]) - 1,
    );
  }
  return matrix.reduce((acc, value) => acc.concat(value[value.length - 1]), '');
};
