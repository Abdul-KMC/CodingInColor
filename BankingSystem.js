// You are tasked with designing banking software for a local bank. The bank offers various account types to its clients, notably Savings Accounts and Checking Accounts. Both these account types share certain features but also have unique functionalities that differentiate them. Your goal is to design a system using classes to represent these different types of accounts.

// Requirements:
// Properties of an object should only be accessed via methods of that object (getter & setter methods). 

// BankAccount Class:
// Properties: accountHolderName, balance
// Methods:
// deposit(amount): Increase the balance by the specified amount and return a message.
// withdraw(amount): Decrease the balance by the specified amount and return a message. Ensure the account doesn't go into negative.
// getBalance(): Returns the current balance.
class Accounts {
    constructor(name, balance) {
        this.accountHolderName = name;
        this.Balance = balance;
    }

    set deposit(amount) {
        this.Balance += amount;
    }
    set withdraw(amount) {
        if (this.Balance - amount >= 0) Balance -= amount;
    }
    get getBalance() {
        return this.Balance;
    }
}

// SavingsAccount Class:
// Inherits from BankAccount.
// Additional Property: minimumBalance - the account should always maintain this minimum balance.
// Override the withdraw method to ensure that withdrawals don't drop the balance below the minimumBalance.
class SavingsAccount extends Accounts {
    constructor(name, balance, minBal) {
        super(name, balance);
        this.minimumBalance = minBal;
    }
    set withdraw(amount) {
        if (this.Balance - amount >= this.minimumBalance) {
            this.Balance -= amount;
            console.log(this.Balance);
        } else {
            console.log("This transaction can't be made as it'll drop the balance below the minimum balance. ");
        }
    }
}

// CheckingAccount Class:
// Inherits from BankAccount.
// Additional Property: overdraftLimit - an additional amount that account holders can withdraw beyond their current balance.
// Override the withdraw method to permit overdraft up to the defined limit.
class CheckingAccount extends Accounts {
    constructor(name, balance, overdraftLimit) {
        super(name, balance);
        this.overdraftLimit = overdraftLimit;
    }
    set withdraw(amount) {
        if (this.Balance - amount >= -(this.overdraftLimit)) {
            this.Balance -= amount;
            console.log(this.Balance);
        } else {
            console.log("This transaction can't be made as it exceeds both the balance and the overdraft limit. ");
        }
    }
}

// Testing:
// Ensure your system works correctly by instantiating objects from your classes and testing them. Here are some scenarios to consider:
// Create a SavingsAccount for a user named "John Doe" with an initial balance of $1500 and a minimum balance requirement of $500.
// Try withdrawing an amount that would drop the balance below the minimum balance.
// Withdraw an acceptable amount and confirm the new balance.
// Create a CheckingAccount for a user named "Jane Smith" with an initial balance of $500 and an overdraft limit of $300.
// Attempt a withdrawal that exceeds the balance but stays within the overdraft limit.
// Try to withdraw an amount that exceeds both the balance and the overdraft limit.
// Try adding more actions to ensure that the system is working correctly
let John = new SavingsAccount("John_Doe", 1500, 500);
John.withdraw = 1100;
John.withdraw = 600;

let Jane = new CheckingAccount("Jane Smith", 500, 300);
Jane.withdraw = 650;
Jane.withdraw = 850;







// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }
// const double = multiplier(2);
// const triple = multiplier(3);

// console.log(double(5)); // Output: 10
// console.log(triple(5)); // Output: 15