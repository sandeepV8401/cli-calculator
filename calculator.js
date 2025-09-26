/**
 * CLI Calculator
 * Usage: node calculator.js <operator> <num1> <num2>
 * Operators: add, subtract, multiply, divide
 * Example: node calculator.js add 5 3
 */

import { add, subtract, multiply, divide } from "./math.js";
import chalk from "chalk";
const operator = String(process.argv[2]).toLowerCase();
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);
//console.log(num1, num2);
// Validate numbers
if (isNaN(num1) || isNaN(num2)) {
  console.log(chalk.red("Error: Invalid numbers"));
  process.exit(1);
}
// Operations map
const operations = { add, subtract, multiply, divide };
// Check operator exists
if (!operations[operator]) {
  console.log(chalk.red("Error: Invalid operator"));
  process.exit(1);
}
// Handle divide by zero
if (operator === "divide" && num2 === 0) {
  console.log(chalk.red("Error: Cannot divide by zero"));
  process.exit(1);
}
// Calculate and display result
const result = operations[operator](num1, num2);
console.log(chalk.green(`Result: ${result}`));
