function findMedianSortedArrays(nums1, nums2) {
    // Merge the two sorted arrays
    var mergedArray = nums1.concat(nums2);

    // Sort the merged array
    mergedArray.sort(function (a, b) {
        return a - b;
    });

    // Find the median of the merged array
    var length = mergedArray.length;
    var middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        // If the merged array has an even length, average the middle two elements
        return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        return mergedArray[middle];
    }
}

// Example usage
var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];
var median = findMedianSortedArrays(nums1, nums2);
console.log(median);