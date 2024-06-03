function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (arr.length <= 1) return arr;
  // Pick the first value as the pivot
  let pivot = arr[0];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  let leftArray = [];
  let rightArray = [];
  for (let i = 1; i < arr.length; i++){
    if (arr[i] < pivot) {
      leftArray.push(arr[i]);
    } else {
      rightArray.push(arr[i]);
    }
  }
  // Recursively sort the left
  let leftSorted = quicksort(leftArray);
  // Recursively sort the right
  let rightSorted = quicksort(rightArray);

  // Return the left, pivot and right in sorted order
  return leftSorted.concat(pivot).concat(rightSorted);
}

//----------Local test area-------------
let arr1 = [10000, 1, 0.5, 0.25, 0.1, 0.001, 0.00001, -1];

console.log(quicksort(arr1));


module.exports = [quicksort];
