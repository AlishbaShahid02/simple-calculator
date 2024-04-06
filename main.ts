#! /usr/bin/env node

import inquirer from "inquirer";
console.log(`"Welcome to CLI simple calculator"`);

let answer = await inquirer.prompt([
    {name: "firstNumber", type: "number", message: "Enter first number"},
    {name: "secondNumber", type: "number", message: "Enter second number"},
    { name: "operator", type: "list", message: "Please select one of the operators to perform operation",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
},
]);
if (answer.operator === "Addition"){
    console.log(`Your answer is ${answer.firstNumber + answer.secondNumber}`);
} else if (answer.operator === "Subtraction"){
    console.log(`Your answer is ${answer.firstNumber - answer.secondNumber}`);
} else if (answer.operator === "Multiplication"){
    console.log(`Your answer is ${answer.firstNumber * answer.secondNumber}`);
} else if (answer.operator === "Division"){
    console.log(`Your answer is ${answer.firstNumber / answer.secondNumber}`);
}
else{
    console.log("Please select valid operator");
}

