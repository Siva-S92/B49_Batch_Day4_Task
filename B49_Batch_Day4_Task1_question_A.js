let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* function findOdd(arr){
    let odd = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            odd.push(arr[i]);
        }
    }
    return odd;
}
console.log(findOdd(array)); */

(function findOdd(){
    let odd = array.filter(x => x % 2 !== 0)
    console.log(odd);
    return odd;
})();
