//declare the sum variable to 0
//for each element in the array, square it and add it to the sum 


function squareSum(numbers){
 let sum = 0;
numbers.map((num) => {
    sum += num * num;  
})

 return sum;
}

console.log(squareSum([1, 2, 2])) 