/**
 *
 * @param nums You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:
 * Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
 * Return the maximum number of points you can earn by applying the above operation some number of times.
 * @returns {number} max number of points
 * Top-down DP
 * Get map of number and its point value (num * appear time) and find max number
 * From max down either take max or don't
 */
export const deleteAndEarnValue = (nums: number[]): number => {
  const { maxNum, mapNum } = nums.reduce(
    (acc, num) => {
      if (acc.mapNum[num] === undefined) {
        acc.mapNum[num] = num;
      } else {
        acc.mapNum[num] = acc.mapNum[num] + num;
      }
      if (acc.maxNum < num) {
        acc.maxNum = num;
      }
      return acc;
    },
    { maxNum: 0, mapNum: {} },
  );
  return getMaxPointOfNum(maxNum, mapNum, {});
};

const getMaxPointOfNum = (
  num: number,
  mapNum: { [key: number]: number },
  cache: { [key: number]: number },
): number => {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return mapNum[1] || 0;
  }

  if (cache[num] !== undefined) {
    return cache[num];
  }

  cache[num] = Math.max(
    getMaxPointOfNum(num - 1, mapNum, cache),
    getMaxPointOfNum(num - 2, mapNum, cache) + (mapNum[num] || 0),
  );
  return cache[num];
};
