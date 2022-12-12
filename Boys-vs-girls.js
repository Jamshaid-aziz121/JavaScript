// var male = "M";

var gender = prompt("Select your gender Male or Female", "M OR F");
console.log(gender);
var percent = +prompt("write your percentage here");
console.log("Percentage is",percent);

if (gender === "M" ) {
  if (percent > 100) {
    console.log("Enter your correct number");
  } else if (percent >= 90 && percent < 100) {
    console.log("Excellent");
  } else if (percent >= 80 && percent < 90) {
    console.log("Brilliant");
  } else if (percent >= 70 && percent < 80) {
    console.log("A Grade");
  } else if (percent >= 60 && percent < 70) {
    console.log("B Grade");
  } else if (percent >= 50 && percent < 60) {
    console.log("C Grade");
  } else {
    console.log("Fail");
  }
} 

else {
  if (percent > 100) {
    console.log("Enter your correct number");
  } else if (percent >= 90 && percent < 100) {
    console.log("X-Excellent");
  } else if (percent >= 80 && percent < 90) {
    console.log("X-Brilliant");
  } else if (percent >= 70 && percent < 80) {
    console.log("A-one Grade");
  } else if (percent >= 60 && percent < 70) {
    console.log("A Grade");
  } else if (percent >= 50 && percent < 60) {
    console.log("B Grade");
  } else {
    console.log("Fail");
  }
}
