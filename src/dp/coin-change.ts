/**
 * You are given an integer array coins representing coins of different denominations and
 * an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * @param coins
 * @param amount
 * @returns
 */
export const findMinimunNumberOfCoinsNeeded = (
  coins: number[],
  amount: number,
): number => {
  const minNumberOfCoin = dp(coins, amount, amount, 0, []);
  return minNumberOfCoin > amount ? -1 : minNumberOfCoin;
};

const dp = (
  coins: number[],
  amount: number,
  amountLeft: number,
  numberOfCoinPicked: number,
  cache: number[],
): number => {
  if (amountLeft === 0) {
    return 0;
  }

  if (amountLeft < 0) {
    return -1;
  }

  if (cache[amountLeft] !== undefined) {
    return cache[amountLeft];
  }

  let minNumberOfCoin = Number.MAX_VALUE;
  for (let i = 0; i < coins.length; i++) {
    const tempMin = dp(
      coins,
      amount,
      amountLeft - coins[i],
      numberOfCoinPicked + 1,
      cache,
    );

    if (tempMin >= 0) {
      minNumberOfCoin = Math.min(minNumberOfCoin, 1 + tempMin);
    }
  }

  cache[amountLeft] =
    minNumberOfCoin === Number.MAX_VALUE ? -1 : minNumberOfCoin;

  return minNumberOfCoin;
};
