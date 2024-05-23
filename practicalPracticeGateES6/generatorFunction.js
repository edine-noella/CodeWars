//Numbers are fun! Write a generator function fibonacciGenerator(limit) that yields Fibonacci numbers up to a specified limit. Remember, the first two Fibonacci numbers are 0 and 1, and each subsequent number is the sum of the previous two.

// write function with explainations
function* fibonacciGenerator(limit) {
    let a = 0, b = 1;
  
    while (a <= limit) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  // Example usage:
  const limit = 50;
  const fibGen = fibonacciGenerator(limit);
  
  for (const num of fibGen) {
    console.log(num); // Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  }

