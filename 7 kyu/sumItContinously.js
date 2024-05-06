//get an array and create a new array to contain my final results
//loop through the array
// push the first element to the new array
// from the following element add it to the previous element and push the result to the new array
// return the new array

function add (arr){
    let newArr = [];
    for(let i=0 ; i<arr.length; i++){
        if(i === 0){
            newArr.push(arr[i])
        }else{
            newArr.push(arr[i] + newArr[i-1])
        }
    }

    return newArr;
}

console.log(add([1,2,3,4,5]))