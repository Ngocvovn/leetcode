import { tribonacciNumber } from '../../src/dp/tribonacci-number';

describe('tribonacci number', () => {
  it('calculate n tribonacci number', () => {
    const max = tribonacciNumber(25);
    expect(max).toBe(1389537);
  });

  it('calculate n tribonacci number 2', () => {
    const max = tribonacciNumber(0);
    expect(max).toBe(0);
  });
});
