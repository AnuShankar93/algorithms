//Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.
//Input: [2, 1, 5, 1, 3, 2], k=3 
//Output: 9
//Explanation: Subarray with maximum sum is [5, 1, 3].
const array = [2, 1, 5, 1, 3, 2];
const k =3;

const findMaximumSumSubArray = (arr,size) => {
    let maxSum = 0;
    let windowStart = 0;
    let windowSum = 0;
    for(i=0; i< arr.length; i++){
        windowSum += arr[i];
        if(i > size-1){
            maxSum = Math.max(maxSum, windowSum);// calculate the max sum
            windowSum -= arr[windowStart]; // subtract the element going out
            windowStart += 1;// slide to next element
        }
    }
    return maxSum;
}

console.log(findMaximumSumSubArray(array,k))