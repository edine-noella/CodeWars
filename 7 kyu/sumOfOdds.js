

function rowSumOddNumbers(n){

    let sum = 0;
    let start = n * (n - 1) + 1;
    for (let i = 0; i < n; i++) {
        sum += start + 2 * i;
    }
    return sum;
}