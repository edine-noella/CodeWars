"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryArrayToNumber = binaryArrayToNumber;
//to change from binary we multiply the number by 2 to the power of the index of the number in the array
//then we add the result for each number in the array
//the loop starts from the end of the array to the beginning  
function binaryArrayToNumber(arr) {
    let result = 0;
    let exponent = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i] * Math.pow(2, exponent);
        exponent++;
    }
    return result;
}
;
console.log(binaryArrayToNumber([1, 1, 1, 1])); //1
