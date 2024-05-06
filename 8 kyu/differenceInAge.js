//filter the smallest and the largest in the array and return the difference between them

function differenceInAges(ages){
    let min = ages[0];
    let max = ages[0];
    let newArr = [];

    for(let i = 0; i < ages.length; i++){
        if(ages[i] < min ){
            min = ages[i];
        }
        if(ages[i] > max){
            max = ages[i];
        }
    }  
    newArr.push(min);
    newArr.push(max);
    newArr.push(max - min);
    
    return newArr;

}

console.log(differenceInAges([82, 15, 6, 38, 35])) 