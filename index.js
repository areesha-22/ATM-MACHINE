import inquirer from "inquirer";
let pincode = 445566;
let balance = 20000;
//user input
//pin code
//user input
//giving two options
//withdraw or check balance
//check balance
//withdraw
//user input
const pinanswer = await inquirer.prompt([{
        message: "enter a pin number",
        type: "number",
        name: "pin",
    }]);
console.log(pinanswer.pin);
if (pinanswer.pin === pincode) {
    console.log("right pincode");
}
else {
    console.log("sorry wrong pin code try again");
}
const options = await inquirer.prompt([{
        message: "select any one option",
        type: "list",
        name: "categories",
        choices: ["check balance", "withdraw", "transfer", "fast cash"],
    }]);
console.log(options.categories);
if (options.categories === "check balance") {
    console.log("current balance is 20000");
}
else if (options.categories === "withdraw") {
    const amountans = await inquirer.prompt([{
            message: "how much you withdraw amount?",
            type: "number",
            name: "amount"
        }]);
    if (balance > amountans.amount) {
        balance -= amountans.amount;
        console.log('your remaining balance is ' + balance);
    }
    else {
        console.log("insuffecient balance");
    }
}
else if (options.categories === "transfer") {
    const transfer = await inquirer.prompt([{
            message: "how much you transfer amount?",
            type: "number",
            name: "transferamount"
        }]);
    balance -= transfer.transferamount;
    console.log(" CONGRAGULATIONS!! your amount is transfer and your current balance is" + balance);
}
else if (options.categories === "fast cash") {
    const fastcash = await inquirer.prompt([{
            message: "choose any one amount",
            type: "list",
            name: "cash",
            choices: ["5000", "10000", "15000", "20000"]
        }]);
    balance -= fastcash.cash;
    //firt show transfer amount and then remaining balance.
    console.log("Your amount is transfer " + fastcash.cash + "and your remaining balance is" + balance);
}
