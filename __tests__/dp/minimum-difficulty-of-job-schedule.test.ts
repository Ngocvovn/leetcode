import { findMinDifficultyOfJobSchedule } from '../../src/dp/minimum-difficulty-of-job-schedule';

describe('minimum difficulty of job schedule', () => {
  it('should find minimum difficulty of job schedule', () => {
    const max = findMinDifficultyOfJobSchedule([6, 5, 4, 3, 2, 1], 2);
    expect(max).toBe(7);
  });
  it('should find minimum difficulty of job schedule 2', () => {
    const max = findMinDifficultyOfJobSchedule([7, 1, 7, 1, 7, 1], 3);
    expect(max).toBe(15);
  });
});
