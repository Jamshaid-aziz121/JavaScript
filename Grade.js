var input = +prompt("enter your number 1", '00');

if (input>100){

    console.log("Enter your correct number");
}
if (input>=90 && input<100) {
    console.log("Excellent");
}

if (input>=80 && input<90) {
    console.log("Brilliant");
}

if (input>=70 && input<80) {
    console.log("A Grade");
}

if (input>=60 && input<70) {
    console.log("B Grade");
}

if (input>=50 && input<60) {
    console.log("C Grade");
}
else {
    console.log("Fail");
}