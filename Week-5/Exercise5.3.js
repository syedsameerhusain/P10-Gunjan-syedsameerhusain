// Exercise5.3:
// Write a function called hasDuplicate which accepts an array and returns true or false if that 
// arraycontains a duplicate
const hasDuplicate=arr=>new Set(arr).size!==arr.length
//Time Complexity -O(1)
//Space Complexity -O(nlogn)
console.log(hasDuplicate([1,5,-1,4]))// false
console.log(hasDuplicate([4,1,5,-1,4]))// true