const bankAccount = function (intitalBalance) {
    var balance =intitalBalance;
    return function() {
        return balance;
    }

}
var account = bankAccount(100000);
console.dir(account);