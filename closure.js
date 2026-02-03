function bankAccount() {
  let balance = 1000;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount();
account.deposit(500);
console.log(account.getBalance()); // 1500
