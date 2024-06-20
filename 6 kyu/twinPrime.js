function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){ return false};
    }
    return true;
   
}

function twinPrime(n){
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime(i) && isPrime(i + 2)){
            count++;
        }
        
    }
    return count;
}

console.log(twinPrime(12));