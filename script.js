// Task 1: Implement a conditional statement to check if a user is logged in.
// Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user. If they are not logged in, tell the user they will need to log in before they can view their cart.

let loggedIn = true;
let cart = ['apple', 'orange', 'banana', 'pear'];
if(loggedIn){
    for (const item in cart) {
        console.log(cart[item]);
    }
}else{
    console.log('Please log in to view your cart');
}

//--------------------------------------------------------

// Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.

let balance = 0;

function deposit(amount){
    balance = balance + amount;
    return balance;
}

// Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.

function withdraw(amount){
    balance = balance - amount;
    return balance - amount;
}

// Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.

function checkBalance(){
    return balance;
}

deposit(1000);
withdraw(250);
console.log('Current balance: ' + checkBalance());