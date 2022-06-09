/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount === Math.floor(amount) && amount > 0) {
    var depo = new Transaction('deposit', amount);
    this.transactions.push(depo);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount === Math.floor(amount) && amount > 0) {
    var withdr = new Transaction('withdrawal', amount);
    this.transactions.push(withdr);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var depositHistory = 0;
  var withdrawHistory = 0;
  if (this.transactions.length === 0) {
    return 0;
  } else {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        depositHistory += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        withdrawHistory += this.transactions[i].amount;
      }
    }
    var balance = depositHistory - withdrawHistory;
    return balance;
  }
};
