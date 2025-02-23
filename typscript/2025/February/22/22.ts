const findSmallestInt = (nums: number[]) => {
    const sortedNums = nums.sort((a, b) => a - b);
    return sortedNums[0];
}