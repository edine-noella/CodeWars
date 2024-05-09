//initialize sum variable to zero
//check if the two numbers are equal, return one of them
//check if the first number is less than the second number
//loop through the numbers from the first number to the second number and add them to the sum
//check if the second number is less than the first number
//loop through the numbers from the second number to the first number and add them to the sum
//return the sum

function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }
    return sum;
}   

console.log(getSum(1, 0)); 