import { houseRobbingSolution } from '../../src/dp/house-robbing';

describe('house robbing', () => {
  it('calculate correct max amount of money you can rob', () => {
    const max = houseRobbingSolution([1, 2, 3, 1]);
    expect(max).toBe(4);
  });

  it('calculate correct max amount of money you can rob 2', () => {
    const max = houseRobbingSolution([1, 2]);
    expect(max).toBe(2);
  });

  it('calculate correct max amount of money you can rob 3', () => {
    const max = houseRobbingSolution([2, 7, 9, 3, 1]);
    expect(max).toBe(12);
  });

  it('calculate correct max amount of money you can rob 4', () => {
    const max = houseRobbingSolution([1]);
    expect(max).toBe(1);
  });

  it('calculate correct max amount of money you can rob 5', () => {
    const max = houseRobbingSolution([]);
    expect(max).toBe(0);
  });
});
