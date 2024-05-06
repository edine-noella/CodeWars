//get a string into my function
//split the string into an array
//create a new array to contain my final results
//filter numbers from the array
//push the numbers to the new array
//join the new array and return it

function lottery (str){
    let arr = str.split('');
    let newArr = [];
        
    arr.forEach(element => {
        if(!isNaN(element)){
            newArr.push(element);
        }
    });

    if(newArr.length === 0){
        return 'One more run!';
    }
    
    return newArr.join('');
    
}

console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"));