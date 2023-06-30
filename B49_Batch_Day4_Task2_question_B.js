let convertToTitleCase = (stringArray)=> {
    return stringArray.map(function (str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
}

// Example usage
var sentences = "hello world! how are you,guys? javascript is awesome";
var array = sentences.split(" ");
console.log(convertToTitleCase(array).join(' '));

