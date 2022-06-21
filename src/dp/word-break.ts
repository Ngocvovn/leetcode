export const isPossobleToBreakWords = (
  s: string,
  wordDict: string[],
): boolean => {
  const cache = [];
  return dp(s, wordDict, cache, s.length);
};

const dp = (
  s: string,
  wordDict: string[],
  cache: boolean[],
  n: number,
): boolean => {
  if (n === 0) {
    return true;
  }
  if (cache[n] !== undefined) {
    return cache[n];
  }

  for (const word of wordDict) {
    if (n >= word.length) {
      if (
        s.slice(n - word.length, n) === word &&
        dp(s, wordDict, cache, n - word.length)
      ) {
        cache[n] = true;
        return true;
      }
    }
  }

  cache[n] = false;
  return false;
};
