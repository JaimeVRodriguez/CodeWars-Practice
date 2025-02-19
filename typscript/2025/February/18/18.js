var maximum = function (nums) {
    return Math.max.apply(Math, nums);
};
var minimum = function (nums) {
    return Math.min.apply(Math, nums);
};
var nums = [5, 2, 9, 12, 3, 7, 6, 4];
console.log(maximum(nums));
console.log(minimum(nums));
