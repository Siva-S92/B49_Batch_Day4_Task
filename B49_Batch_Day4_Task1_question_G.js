function removeDuplicates(array) {
    return array.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
}

// Example usage
var array = [1, 2, 3, 2, 4, 1, 5];
var uniqueArray = removeDuplicates(array);
console.log(uniqueArray);