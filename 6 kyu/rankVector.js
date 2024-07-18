

function ranks(array) {
  let sorted = array.slice().sort((a, b) => b - a);
  //we sliced the array to avoid changing the original
  let ranks = array.map(num => sorted.indexOf(num) + 1);
  return ranks;
}

console.log(ranks([9, 3, 6, 10])); // [2, 4, 3, 1]