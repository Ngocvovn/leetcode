export const findKthLargestElement = (nums: number[], k: number): number => {
  let index = 0;
  let kth = nums.length;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[index]) {
      if (kth > k) {
        kth--;
      }
      index = i;
    } else if (nums[i] < nums[index]) {
      if (kth > k) {
        kth--;
      }
      index = i;
    }
  }

  console.log(kth);

  return nums[kth];
};
