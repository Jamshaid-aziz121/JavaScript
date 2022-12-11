var user = +prompt(`
                    select-1 : for Deposit
                    select-2 : for withdraw
                    select-3 : for withdraw 5000
                    select-4 : withdraw for 10,000`);

var balance = 100000;

if ( user == 1){
    var credit = +prompt(" Deposit amount");
    var currentBalance = 100000 + credit;
    alert (currentBalance);
};   

if (user == 2){
    var debit = +prompt("withdraw amount");
    var currentBalance = 100000 + debit;
    alert (currentBalance);

};

 
if (user == 3){
    const fix = 5000;
    var currentBalance = 100000 - fix;
    alert (currentBalance);
};
if (user == 4){
    const fix = 10000;
    var currentBalance = 100000 - fix; 
    alert (currentBalance);
};