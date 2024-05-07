//declqre variable shortestLength
//split the string into an array of words
//find the length of each word
//while looping through the array if the length is less the shortestLength, set shortestLength to the length
//return shortestLength

function findShort(s){
    let arr = s.split(' ');
    let shortestLength = arr[0].length;
    
    arr.forEach((word) => {
        if(word.length < shortestLength){
            shortestLength = word.length;
        }
    })
    
    return shortestLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //3