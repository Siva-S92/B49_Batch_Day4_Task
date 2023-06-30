/* function convertToTitleCase(stringArray) {
    return stringArray.map(function (str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
    });
}

// Example usage
var sentences = "hello world! how are you,guys? javascript is awesome";
var array = sentences.split(" ");
var titleCaseArray = convertToTitleCase(array).join(' ');
console.log(titleCaseArray); */





function convertToTitleCase(array) {
    var lowercase = array.map((value) => value.toLowerCase());
    var titlecase = lowercase.map((str)=> str.charAt(0).toUpperCase()+str.slice(1));
    var output = titlecase.join(' ');
    console.log(output);
};

// Example usage
var sentences = "hello world! how are you,guys? javascript is awesome";
var array = sentences.split(" ");
convertToTitleCase(array);







