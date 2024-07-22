function squareDigits(num){
    let powered = num.toString().split('').map((a) => Math.pow(a,2)).join('');  
     return parseInt(powered);
  }