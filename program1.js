const array2=[8,3,2,5,7,6];
console.log("first element of the array is");
console.log(array2[0]);
if (array2[0] > 1) {
    for (let i = 2; i < n; i++) {
        if (array2[0] % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}