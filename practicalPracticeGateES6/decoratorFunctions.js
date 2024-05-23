//A decorator function in JavaScript can be used to wrap another function to add additional functionality.
// In this case, we can create a logExecutionTime decorator that logs the execution time of the function it decorates.

function logExecutionTime(func) {
    return function(...args) {
      const start = performance.now(); // Start timing
      const result = func.apply(this, args); // Call the original function
      const end = performance.now(); // End timing
      console.log(`Execution time for ${func.name}: ${end - start} milliseconds`);
      return result; // Return the result of the original function
    };
  }
  
  // Example usage:
  
  function exampleFunction(num) {
    // Simulate a time-consuming operation
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Apply the decorator
  const timedExampleFunction = logExecutionTime(exampleFunction);
  
  // Call the decorated function
  const result = timedExampleFunction(1000000); // Adjust the argument as needed
  console.log('Result:', result);
  