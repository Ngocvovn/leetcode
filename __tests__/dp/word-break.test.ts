import { isPossobleToBreakWords } from '../../src/dp/word-break';

describe('word break', () => {
  it('should check if a string can be broken into words', () => {
    const result = isPossobleToBreakWords('catsandog', [
      'cats',
      'dog',
      'sand',
      'and',
      'cat',
    ]);
    expect(result).toBe(false);
  });
  it('should check if a string can be broken into words 2', () => {
    const result = isPossobleToBreakWords('applepenapple', ['apple', 'pen']);
    expect(result).toBe(true);
  });
});
