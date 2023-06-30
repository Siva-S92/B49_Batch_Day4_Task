function isPalindrome(string) {
    // Remove non-alphanumeric characters and convert to lowercase
    var alphanumericString = string.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is equal to its reverse
    return alphanumericString === alphanumericString.split('').reverse().join('');
}

function getPalindromes(array) {
    return array.filter(function (string) {
        return isPalindrome(string);
    });
}

// Example usage
var strings = ["hello", "level", "racecar", "world", "madam"];
var palindromes = getPalindromes(strings);
console.log(palindromes);