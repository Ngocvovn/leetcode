import { paintFence } from '../../src/dp/paint-fence';

describe('paint fence', () => {
  it('should find how many way possible to paint fence', () => {
    const numberOfPossibleWays = paintFence(6, 3);
    expect(numberOfPossibleWays).toBe(492);
  });
});
