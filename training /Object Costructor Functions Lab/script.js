// var numbers = [10,20,30,40]
//
// function closestNumbers(arr){
//   var closest = 10**20;
//
//   for (var i=0; i < arr.length-1; i++)
//   {
//
//     for(var j=i+1; j<arr.length; j++){
//       if(Math.abs(arr[i]-arr[j]) < closest){
//         closest = Math.abs(arr[i]-arr[j])
//       }
//     }
//    console.log(arr[i]);
// }
//   return closest;
// }
//
// console.log("Minimum difference is "  + closestNumbers(numbers) )


// var myHolidaysItems = ["tent", "sleepingbag", "lampe", "camera"];
//
// function reverseArray(myArray) {
//     var newHolidayarray = myArray.slice().reverse();
//     console.log(newHolidayarray);
// }
//
// reverseArray(myHolidaysItems);


// function reverseMyName(str){
//   return str ;
// }
// reverseMyName(“fotini”);


function reverseMyName(str) {
  var splitMyName = str.split("");
  var reverseArray = splitMyName.reverse();
  var joinArray = reverseArray.join("");

    return joinArray;
}
reverseMyName("fotini");
console.log(reverseMyName("fotini"));
