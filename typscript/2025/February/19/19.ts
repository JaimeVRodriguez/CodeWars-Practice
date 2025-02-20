const inverse_nums = (nums: number[]) => {
    return nums.map((num) => {
        return -num
    })
}

const numbers = [1, -2, 3, -4, 5]

console.log(inverse_nums(numbers));
