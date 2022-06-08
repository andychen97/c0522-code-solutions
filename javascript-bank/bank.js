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
    this.nextAccountNumber++;
    return this.number;
  } else {
    return null;
  }
};
