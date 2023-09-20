#! /usr/bin/env node
import inquirer from "inquirer";
import gradient from "gradient-string";
import { sum, sub } from "./functionsmudule.js";
let answers = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: gradient.rainbow("Enter First Number: ")
    }, {
        name: "num2",
        type: "number",
        message: gradient.rainbow("Enter Second Number: ")
    }, {
        name: "Operation",
        type: "list",
        choices: ["add", "sub", "multipication", "division"],
        message: gradient.rainbow("Enter your Operator: "),
    }
]);
let answer = [
    {
        name: "again",
        type: "confirm"
    }
];
async function calculator() {
    let { num1, num2, operation } = await inquirer.prompt(answers);
    if (operation === "add") {
        console.log("the sum of two numbers: ", sum(num1, num2));
    }
    else if (operation === "sub") {
        console.log("the differce of two numbers: ", sub(num1, num2));
    }
}
