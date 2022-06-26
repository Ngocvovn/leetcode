import { countDecodeWays } from '../../src/dp/decode-ways';

describe('find number of decodings', () => {
  it('should find number of decodings', () => {
    const min = countDecodeWays('1123');
    expect(min).toBe(5);
  });
});
