var arr = [8, 5, 2, 6,3, 4, 9, 25, 68, 24, 55, 121, 89, 27, 30];
// var back = arr.filter((item)=> item>arr[5]);
// 

console.log("arr", arr);

for (i = 0; i < arr.length-1; i++) {
  
  if (arr[i] > arr[i+1]) {
    temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;
    i = -1;
    console.log(i);
  
  }
 
//   else{
//     console.log("j");
//   }
  console.log(arr);
}
// console.log(arr);
    