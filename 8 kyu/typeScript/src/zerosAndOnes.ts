//to change from binary we multiply the number by 2 to the power of the index of the number in the array
//then we add the result for each number in the array
//the loop starts from the end of the array to the beginning  
export function binaryArrayToNumber(arr: number[]): number{
    let result:number = 0;
    let exponent:number = 0;
    for(let i = arr.length-1; i >= 0; i--){ 
      result += arr[i] * Math.pow(2, exponent);
      exponent++;
    }
    return result;
     
  };

  console.log(binaryArrayToNumber([1,1,1,1])); //1