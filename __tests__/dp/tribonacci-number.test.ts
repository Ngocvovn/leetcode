import { tribonacciNumber } from '../../src/dp/tribonacci-number';

describe('tribonacci number', () => {
  it('calculate n tribonacci number', () => {
    const max = tribonacciNumber(25);
    expect(max).toBe(1389537);
  });
});
