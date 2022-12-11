var obtainMarks = +prompt("Insert your total marks");
var outofMark = +prompt(" out of marks");
var result =  obtainMarks/outofMark * 100;
console.log(result);

// var result = +prompt("enter your number 1", '00');

if (result>100){

    console.log("Enter your correct number");
}
else if (result>=90 && result<100) {
    console.log("Excellent");
}

else if (result>=80 && result<90) {
    console.log("Brilliant");
}

else if (result>=70 && result<80) {
    console.log("A Grade");
}

else if (result>=60 && result<70) {
    console.log("B Grade");
}

else if (result>=50 && result<60) {
    console.log("C Grade");
}
else {
    console.log("Fail");
}