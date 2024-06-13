

function arrayStats(arr) {
  return {
    sum: arr.reduce((a, b) => a + b, 0),
    average: +(arr.reduce((a, b) => a + b, 0) / arr.length).toFixed(2),
    min: Math.min(...arr),
    max: Math.max(...arr)
  };
}

console.log(arrayStats([1, 2, 3, 4, 5]));