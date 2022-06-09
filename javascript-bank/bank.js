/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance === Math.floor(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    return this.nextAccountNumber++;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var balance = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      var balancePerAccount = this.accounts[i].getBalance();
      balance += balancePerAccount;
    }
    return balance;
  }
};
