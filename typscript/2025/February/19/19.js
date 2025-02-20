var inverse_nums = function (nums) {
    return nums.map(function (num) {
        return -num;
    });
};
var numbers = [1, -2, 3, -4, 5];
console.log(inverse_nums(numbers));
