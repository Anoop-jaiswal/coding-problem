const mergeSortedArray = (arr1, arr2) => {
  const sortedArr = [];
  let i = 0;
  let j = 0;

  // Merge elements from both arrays as long as both have elements remaining
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArr.push(arr1[i]);
      i++; // Increment `i` only when taking an element from `arr1`
    } else {
      sortedArr.push(arr2[j]);
      j++; // Increment `j` only when taking an element from `arr2`
    }
  }

  // Add remaining elements from arr1 (if any)
  while (i < arr1.length) {
    sortedArr.push(arr1[i]);
    i++;
  }

  // Add remaining elements from arr2 (if any)
  while (j < arr2.length) {
    sortedArr.push(arr2[j]);
    j++;
  }

  return sortedArr;
};

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [7, 8, 9, 10, 11];
console.log(mergeSortedArray(arr1, arr2)); // [ 1, 2, 3,  4,  5, 7, 8, 9, 10, 11]
