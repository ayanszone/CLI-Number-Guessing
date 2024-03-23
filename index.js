#! /usr/bin/env node
import inquirer from "inquirer";
//1. Computer will generate a random number - Done
//2. User input for guessing number - Done
//3. Compare user input with computer generated number. - Done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const numbers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6: ",
    },
]);
console.log(numbers);
if (numbers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed the right number!");
}
else if (numbers.userGuessedNumber > 6) {
    console.log("Oops! It seems like you've entered an invalid number. \nPlease make sure your guess is between 1-6. Let's try again! :)");
}
else {
    console.log(`The number you guessed is wrong. The right number is ${randomNumber}. Try Again! :)`);
}
