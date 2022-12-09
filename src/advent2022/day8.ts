const check = (
  input: string[],
  i: number,
  j: number,
  width: number,
  height: number,
  value: string,
): boolean => {
  let allSmaller = true;
  for (let row = 0; row < i; row++) {
    if (input[row][j] >= value) {
      allSmaller = false;
    }
  }
  if (allSmaller) {
    return true;
  }
  allSmaller = true;
  for (let row = i + 1; row < height; row++) {
    if (input[row][j] >= value) {
      allSmaller = false;
    }
  }
  if (allSmaller) {
    return true;
  }
  allSmaller = true;

  for (let column = 0; column < j; column++) {
    if (input[i][column] >= value) {
      allSmaller = false;
    }
  }
  if (allSmaller) {
    return true;
  }
  allSmaller = true;

  for (let column = j + 1; column < width; column++) {
    if (input[i][column] >= value) {
      allSmaller = false;
    }
  }

  return allSmaller;
};

const findScenicScore = (
  input: string[],
  i: number,
  j: number,
  width: number,
  height: number,
  value: string,
): number => {
  let top = 0;
  for (let row = i - 1; row >= 0; row--) {
    top++;
    if (input[row][j] >= value) {
      break;
    }
  }
  let bottom = 0;
  for (let row = i + 1; row < height; row++) {
    bottom++;
    if (input[row][j] >= value) {
      break;
    }
  }

  let left = 0;
  for (let column = j - 1; column >= 0; column--) {
    left++;
    if (input[i][column] >= value) {
      break;
    }
  }

  let right = 0;
  for (let column = j + 1; column < width; column++) {
    right++;

    if (input[i][column] >= value) {
      break;
    }
  }
  return left * top * right * bottom;
};

const solution = (input: string): number => {
  const lines = input.split('\n');
  const width = lines[0].length;
  const height = lines.length;
  let max = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i === 0 || j === 0 || i === height - 1 || j === width - 1) {
        continue;
      } else {
        max = Math.max(
          findScenicScore(lines, i, j, width, height, lines[i][j]),
          max,
        );
      }
    }
  }
  return max;
};
