//define the starting point of the row
//with the row number given to use we can calculate the starting point
//the starting point is n * (n - 1) + 1
//then we can add 2 to the starting point for each element in the row
//we can use a for loop to add each element to an array from the starting point
function oddRow(n) {
    let start = n * (n - 1) + 1;
    let arr = [];
    for(let i = 0; i < n; i++){
        arr.push(start);
        start += 2;
    }
    return arr;
  } 