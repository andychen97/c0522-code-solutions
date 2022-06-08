/* exported Bank */

function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];

}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance === Math.floor(balance) && balance > 0) {
    var newAccount = new Account(this.nextAccountNumber, this.holder);
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
      return this.accounts[i].holder;
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var depositHistory = 0;
    var withdrawHistory = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      for (var j = 0; j < this.transactions.length; j++) {
        if (this.accounts[i].transactions[j].type === 'deposit') {
          depositHistory += this.accounts[i].transactions[j].amount;
        } else if (this.accounts[i].transactions[i].type === 'withdrawal') {
          withdrawHistory += this.accounts[i].transactions[j].amount;
        }
      }
    }
    var balance = depositHistory - withdrawHistory;
    return balance;
  }
};
