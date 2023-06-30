function rotateArray(arr, k) {
    // Calculate the effective rotations
    var rotations = k % arr.length;

    // Rotate the array using splice and concat
    var rotatedArray = arr.splice(-rotations).concat(arr);

    return rotatedArray;
}

// Example usage
var array = [1, 2, 3, 4, 5];
var k = 2;
var rotatedArray = rotateArray(array, k);
console.log(rotatedArray);