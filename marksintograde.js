var obtainMarks = +prompt("Insert your total marks");
var outofMark = +prompt(" out of marks");
var result =  obtainMarks/outofMark * 100;
console.log("Your Percentage"  + result);

// var result = +prompt("enter your number ", '00');

var remarks = "You are"
var remarks2 = "your Grade is :  "

if (result>100){

    console.log("Enter your correct number");
}
else if (result>=90 && result<100) {
    console.log(remarks +  " Excellent ");
}

else if (result>=80 && result<90) {
    console.log(remarks + " Brilliant");
}

else if (result>=70 && result<80) {
    console.log(remarks2 + " A ");
}

else if (result>=60 && result<70) {
    console.log(remarks2 + " B ");
}

else if (result>=50 && result<60) {
    console.log(remarks2 + " C ");
}
else {
    console.log(reamrks + " Fail");
}