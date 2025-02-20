const firstNonConsecutive = (arr: number[]) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1];
        }
    }
    return null;
}

const nums = [1,2,3,4,6,7,8]

console.log(firstNonConsecutive(nums));
