//the only difficult thing is to handle bigInt
//will have two loops to find the divisors 
//a counter to keep track of the number of divisors
//and if condition if a number is a divisor or not
//if the counter is 3 then we will increment the counter of the number
//if the counter is 3 then we push the number to the result array

function solution(n,m) {
    let result = [];
    for(let i = n; i <= m; i++){
        let counter = 0;
        for(let j = 1n; j <= i; j++){
            if(i % j === 0n){
                counter++;
            }
        }
        if(counter === 3){
            result.push(i);
        }
    }
    return result;
}
console.log(solution(2n, 100n)); 