let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* function findSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum = sum + element;
    });
    return sum;
}
console.log(findSum(arr)); */


// IIFE

(function findSum(arr) {
    let sum = 0;
    arr.forEach((element)=>{
        sum = sum + element
    })
    console.log(sum);
})(arr);



