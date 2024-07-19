

export const mergeStrings = (first: string, second: string): string => {
    let result: string = first;
    for (let i = 0; i < second.length; i++) {
        //in each iteration we check if the first string ends with the substring of the second string from the beginning to the index i
        if (first.endsWith(second.substring(0, i + 1))) { 
            //if the first string ends with the substring of the second string from the beginning to the index i
            result = first + second.substring(i + 1);
        }
    }
    return result;
  }

console.log(mergeStrings("abcde", "def")); 