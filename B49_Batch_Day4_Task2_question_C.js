let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let findSum = (arr) => {
    let sum = 0;
    arr.forEach(element => {
        sum = sum + element;
    });
    return sum;
}
console.log(findSum(array));
