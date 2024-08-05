function toCamelCase(str){
    let arr = str.split('-')
    let result = arr[0][0].toLowerCase() + arr[0].slice(1);
   
    for (let i = 1 ; i< arr.length ; i++){
        result += arr[i][0].toUpperCase() + arr[i].slice(1)
    }
    
    return result;
}

console.log(toCamelCase('the-stealth-warrior')) 