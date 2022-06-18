/**
 * You want to schedule a list of jobs in d days.
 * Jobs are dependent (i.e To work on the ith job, you have to finish all the jobs j where 0 <= j < i).
 * You have to finish at least one task every day.
 * The difficulty of a job schedule is the sum of difficulties of each day of the d days.
 *  The difficulty of a day is the maximum difficulty of a job done on that day.
 * You are given an integer array jobDifficulty and an integer d. The difficulty of the ith job is jobDifficulty[i].
 * Return the minimum difficulty of a job schedule. If you cannot find a schedule for the jobs return -1.
 */
export const findMinDifficultyOfJobSchedule = (
  jobDifficulty: number[],
  d: number,
): number => {
  if (jobDifficulty.length < d) {
    return -1;
  }
  const cache: number[][] = new Array(jobDifficulty.length)
    .fill([])
    .map(() => new Array(d + 1).fill(-1));

  const hardestJobsAtLastDay = findAllPossibleHardestJobAtLastDay(
    jobDifficulty,
    d,
  );
  return dp(0, 1, hardestJobsAtLastDay, d, jobDifficulty, cache);
};

const findHardestJob = (
  jobDifficulty: number[],
  i: number,
  j: number,
): number => {
  let hardest = jobDifficulty[i];
  for (let k = i; k <= j; k++) {
    if (jobDifficulty[k] > hardest) {
      hardest = jobDifficulty[k];
    }
  }
  return hardest;
};

const findAllPossibleHardestJobAtLastDay = (
  jobDifficulty: number[],
  d: number,
): number[] => {
  let hardestJobsAtLastDay = [];
  const length = jobDifficulty.length;
  for (let i = d - 1; i < length; i++) {
    hardestJobsAtLastDay[i] = findHardestJob(jobDifficulty, i, length);
  }
  return hardestJobsAtLastDay;
};
const dp = (
  i: number,
  day: number,
  hardestJobsAtLastDay: number[],
  d: number,
  jobDifficulty: number[],
  cache: number[][],
) => {
  if (day === d) {
    return hardestJobsAtLastDay[i];
  }

  if (cache[i][day] > -1) {
    return cache[i][day];
  }
  let minSchedule = Number.MAX_VALUE;
  for (let j = i; j < jobDifficulty.length + day - d; j++) {
    const tempMin =
      findHardestJob(jobDifficulty, i, j) +
      dp(j + 1, day + 1, hardestJobsAtLastDay, d, jobDifficulty, cache);
    if (tempMin < minSchedule) {
      minSchedule = tempMin;
    }
  }

  cache[i][day] = minSchedule;
  return minSchedule;
};
