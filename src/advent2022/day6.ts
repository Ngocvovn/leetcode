const SIZE = 14;
export const solution = (input: string): number => {
  return findFirstMaker(input, 0);
};

const findFirstMaker = (input: string, from: number): number => {
  if (from >= input.length - SIZE - 1) return -1;
  if (checkIfFirstMakerRequirementFullfilled(input, from)) return from + SIZE;
  return findFirstMaker(input, from + 1);
};

const checkIfFirstMakerRequirementFullfilled = (
  input: string,
  from: number,
): boolean => {
  const set = new Set();
  for (let i = 0; i < SIZE; i++) {
    set.add(input[from + i]);
  }
  return set.size === SIZE;
};
