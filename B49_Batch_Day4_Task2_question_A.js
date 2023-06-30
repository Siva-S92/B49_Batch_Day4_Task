let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNumber = () => {
    odd = array.filter(x => x % 2 !== 0)
    return odd
}
console.log(oddNumber());