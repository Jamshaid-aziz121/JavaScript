var input0 = prompt(
  "Do you want to convert Dollor into PKR?? type y for yes & n for no"
);

// debugger

if (input0 == "y") {
  var input1 = +prompt("Enter your amount $");
  if (input1 == 0) {
    console.log("value must be greater than 0");
  } else {
    var result1 = 250 * input1;
    console.log(" PKR " + result1);
  }
} else {
  var input2 = +prompt("Enter your amount pkr");
  if (input2 == 0) {
    console.log("value must be greater than 0");
  } else {
    var result2 = input2 / 250;
    console.log(" $ " + result2);
  }
}
