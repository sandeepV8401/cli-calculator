import {add, subtract, multiply, divide} from './math.js';
import chalk from 'chalk';
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
console.log(chalk.green("Add:"),add(num1,num2));
console.log(chalk.red("Subtract:"),subtract(num1,num2));
console.log(chalk.blue("Multiply:"),multiply(num1,num2));
console.log(chalk.yellow("Divide:"),divide(num1,num2));