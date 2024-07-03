//function to add only numbers without dublicates in an array



function sumNoDuplicates(arr) {
    let frequencyObj = {};
    let result = [];
    let sum = 0;
  
    // Count frequencies of each element in the array
    arr.forEach(element => {
      if (frequencyObj[element]) {
        frequencyObj[element]++;
      } else {
        frequencyObj[element] = 1;
      }
    });
  
    // Push elements with frequency 1 into the result array
    arr.forEach(element => {
      if (frequencyObj[element] === 1) {
        result.push(element);
      }
    });

   for(let i = 0 ; i < result.length; i++) {
    sum += result[i];
   }

   return sum;

  }


console.log(sumNoDuplicates([9, 8, 3, 1, 8, 1, 7]))