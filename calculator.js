var value1 = +prompt("Type your 1st-value");
var symbol= prompt("Type symbol");
var value2 = +prompt("Type your 2nd-value");


var plus = 0;
var minus = 0;
var divide = 0;
var multiply = 0;

if (value1 == 0 || value2 == 0 ||symbol == "") {
    alert("Please enter values OR symbols");
};


if ( symbol === "+"){
    plus = value1 + value2;
    alert(plus);
};

if ( symbol=== "-" ){
        minus = value1 - value2;
        alert(minus);
}
if (symbol === "/"){
            divide = value1 / value2;
            alert(divide);
};
if (symbol === "*") {
            multiply = value1 * value2;
            alert(multiply);
};

    
