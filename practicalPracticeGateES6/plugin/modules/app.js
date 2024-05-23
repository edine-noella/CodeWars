// Import math functions from math.js

import { add, subtract, multiply, divide } from './math.js';

const num1 = 10;
const num2 = 5;

console.log(`Addition of ${num1} and ${num2} is:`, add(num1, num2)); // Output: 15
console.log(`Subtraction of ${num2} from ${num1} is:`, subtract(num1, num2)); // Output: 5
console.log(`Multiplication of ${num1} and ${num2} is:`, multiply(num1, num2)); // Output: 50
console.log(`Division of ${num1} by ${num2} is:`, divide(num1, num2)); // Output: 2

try {
  console.log(`Division of ${num1} by 0 is:`, divide(num1, 0)); // This will throw an error
} catch (error) {
  console.error(error.message); // Output: Division by zero is not allowed.
}
