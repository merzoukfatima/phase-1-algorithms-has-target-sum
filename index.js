function hasTargetSum(array, target) {
  // Write your algorithm here

  /*fellow the index of the array*/
  let indexItem = 0;
  let result;
  /*iterate over the array */
  for (item of array) { //n

    /*use find() to see if (target-item) exist in the array*/
    result = array.find((number, index) => {//n
      return number === target - item && indexItem != index; 
    });

    /*increase index*/
    indexItem++; //1

    /*if the variable is found it means result is not undefined thus return true */
    if (result) return true; //1
  }

  /* if we go over all the array without returning true then we didn't find target thus return false*/
  return false; //1
}

/* 
  Write the Big O time complexity of your function here
  O(n)=[(n*(n+2)]+1
  O(n)=(n²+2n)+1
  O(n)=n²
*/

/* 
  Add your pseudocode here
  iterate over the array 
  result =target-array[i]
  if(array.find(result)=== true)
   return true
   
  return false
  check if the number is less then the target 
  push every number that is 
  then start adding the numbers up
  we will use reduce here 
*/

/*
  Add written explanation of your solution here
  write a function that take an array and a number and check if the array has items when added to each others can give the parameter number.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));
}

module.exports = hasTargetSum;
