// filter elements in a that are not in b using filter
// filter elements in b that are not in a using filter
// concat the two arrays
// filter method returns a new array with all elements that pass the test implemented by the provided function
//concat method is used to merge two or more arrays
//remove duplicates from the result array
// sort the result array

function diff(a, b) {   
     
    
    let result = a.filter(e => !b.includes(e)).concat(b.filter(e => !a.includes(e)));
    let unique = [...new Set(result)];
    return unique.sort();
   
}

console.log(diff([1, 2], [1])); 