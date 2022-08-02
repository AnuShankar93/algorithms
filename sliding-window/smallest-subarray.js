//Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0 if no such subarray exists.
// Input: [2, 1, 5, 2, 3, 2], S=7
//Output: 2
//Explanation: The smallest subarray with a sum greater than or equal to ‘7’ is [5, 2].

const array = [2, 1, 5, 2, 3, 2];
const targetVal = 7;

const findSmallestSubArray = (arr, target) => {
   let minLength = Infinity;
   let windowSum = 0;
   let windowStart = 0; 
   for(let windowEnd =0 ; windowEnd < arr.length; windowEnd++) {
    windowSum+= arr[windowEnd];
    while(windowSum >= target){
        minLength = Math.min(minLength, windowEnd - windowStart + 1);
        windowSum -= arr[windowStart]
        windowStart += 1 // sliding the window
    }
   }
   if (minLength === Infinity) {
    return 0;
  }
  return minLength;
}

console.log(findSmallestSubArray(array, targetVal));