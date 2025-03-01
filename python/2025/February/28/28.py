def findMedianSortedArrays(nums1, nums2):
    combined = nums1 + nums2
    combined.sort()
    length = len(combined)

    if length % 2 == 0:
        total = combined[length // 2 - 1] + combined[length // 2]
        return total / 2
    else:
        return combined[length // 2]

findMedianSortedArrays([1, 3], [2])
findMedianSortedArrays([1, 2], [3, 4])
