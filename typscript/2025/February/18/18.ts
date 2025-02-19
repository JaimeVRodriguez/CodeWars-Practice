const maximum = (nums: number[]) => {
    return Math.max(...nums);
}

const minimum = (nums: number[]) => {
    return Math.min(...nums);
}

const nums = [5, 2, 9, 12, 3, 7, 6, 4];

console.log(maximum(nums));
console.log(minimum(nums));