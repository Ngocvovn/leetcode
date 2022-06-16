import { deleteAndEarnValue } from '../../src/dp/delete-and-earn';

describe('delete and earn', () => {
  it('calculate max number of points', () => {
    const max = deleteAndEarnValue([2, 2, 3, 3, 3, 4]);
    expect(max).toBe(9);
  });
  it('calculate max number of points 2', () => {
    const max = deleteAndEarnValue([
      3, 7, 10, 5, 2, 4, 8, 9, 9, 4, 9, 2, 6, 4, 6, 5, 4, 7, 6, 10,
    ]);
    expect(max).toBe(66);
  });
});
