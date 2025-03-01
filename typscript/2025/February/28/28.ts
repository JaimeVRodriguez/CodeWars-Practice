function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const combined = [...nums1, ...nums2];
    combined.sort((a, b) => a - b);
    const len = combined.length;

    if (len % 2 === 0) {
        const total = combined[Math.floor(len / 2) - 1] + combined[Math.floor(len / 2)];
        return total / 2;
    } else {
        return combined[Math.floor(len / 2)];
    }
}


console.log(findMedianSortedArrays([1, 3], [2]));