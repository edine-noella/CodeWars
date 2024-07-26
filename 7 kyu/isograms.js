

function isIsogram(str){
    let uniqueLength = [...new Set(str.toLowerCase())].length
    return uniqueLength - str.length === 0
}