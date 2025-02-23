var findSmallestInt = function (nums) {
    var sortedNums = nums.sort(function (a, b) { return a - b; });
    return sortedNums[0];
};
