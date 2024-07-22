function getCount(str) {
    let count = 0;
    let vowels = ['a','u','i','o','e'];
      str.split('').map((char) => {
       if(vowels.includes(char)){
         count++;
       }
      })
      return count;
    }