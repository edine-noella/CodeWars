function sumTwoSmallestNumbers(numbers) {  
        let sorted =  numbers.sort((a,b) => a - b)
        return sorted[0] + sorted[1]
      }
  

  console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) // 13