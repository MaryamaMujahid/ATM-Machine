import inquirer from "inquirer";
//intialize user balance and pin code
let myBalance = 10000; //Dollar
let myPin = 1234;
//print welcome meessage
console.log(" Welcome to code with maryum - ATM machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct. login is successfuly!");
    //  console.log(`current account balance is ${myBalance}`)
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an option",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let withdrawAns = await inquirer.prompt([
            {
                namme: "withdrawMethod",
                type: "list",
                message: "select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "select Amount",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]);
            if (fastCashAns.FastCash > myBalance) {
                console.log("Insuficient balance");
            }
            else
                (myBalance -= fastCashAns.FastCash);
            console.log(`${fastCashAns.FastCash} withdraw successfuly`);
            console.log(`your reamining balance is ${myBalance}`);
            if (withdrawAns.withdrawmethod === "Enter Amount") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter the amount to Withdraw:"
                    }
                ]);
                if (amountAns.amount > myBalance) {
                    console.log("Insuficient Balance");
                }
                else {
                    myBalance -= amountAns.amount;
                    console.log(`${amountAns.amount} successfuly Withdraw`);
                    console.log(`your reamining balance is: ${myBalance}`);
                }
            }
        }
        if (operationAns.operation === "Check Balance") {
            console.log(`your account balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Pin is Incorrect, Try Again");
}
