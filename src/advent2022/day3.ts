const alphabetMap = (() => {
  const caps = [...Array(26)].map((_val, i) => String.fromCharCode(i + 65));
  const all = caps.map((letter) => letter.toLowerCase()).concat(caps);
  return all.reduce((acc, value, index) => {
    acc[value] = index + 1;
    return acc;
  }, {});
})();

export const solution = (input: string): number => {
  const lines = input.split('\n');
  let total = 0;
  for (let i = 0; i < lines.length; i++) {
    total += findScoreOfRucksack(lines[i]);
  }
  return total;
};

const findScoreOfRucksack = (input: string): number => {
  let total = 0;
  const length = input.length;
  const firstHalfMap = {};
  for (let i = 0; i < length / 2; i++) {
    firstHalfMap[input[i]] = true;
  }

  for (let i = length / 2; i < length; i++) {
    if (firstHalfMap[input[i]]) {
      delete firstHalfMap[input[i]];
      total += alphabetMap[input[i]];
    }
  }

  return total;
};

const findScoreInElkGroup = (inputs: string[]): number => {
  let map = {};
  for (let i = 0; i < inputs[0].length; i++) {
    map[inputs[0][i]] = true;
  }
  for (let i = 1; i < inputs.length; i++) {
    map = findSameItemOfRucksack(inputs[i], map);
  }

  return Object.keys(map).reduce((acc, value) => {
    return acc + alphabetMap[value];
  }, 0);
};

const findSameItemOfRucksack = (
  input: string,
  map: { [key: string]: boolean },
): { [key: string]: boolean } => {
  const sameItemMap = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]]) {
      sameItemMap[input[i]] = true;
    }
  }
  return sameItemMap;
};

export const solution2 = (input) => {
  const lines = input.split('\n');
  let total = 0;
  for (let i = 0; i < lines.length; i += 3) {
    total += findScoreInElkGroup([lines[i], lines[i + 1], lines[i + 2]]);
  }
  return total;
};
