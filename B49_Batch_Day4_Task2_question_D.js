let isPrime = (number)=> {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let getPrimeNumbers = (array)=> {
    return array.filter(function (number) {
        return isPrime(number);
    });
}

// Example usage
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(getPrimeNumbers(numbers));