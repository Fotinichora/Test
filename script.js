var numbers = [10,20,30,40]

function closestNumbers(arr){
  var closest = 10**20;

  for (var i=0; i < arr.length-1; i++)
  {

    for(var j=i+1; j<arr.length; j++){
      if(Math.abs(arr[i]-arr[j]) < closest){
        closest = Math.abs(arr[i]-arr[j])
      }
    }
   console.log(arr[i]);
}
  return closest;
}

console.log("Minimum difference is "  + closestNumbers(numbers) )
