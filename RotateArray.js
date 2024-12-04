const rotateArray = (arr, k) => {
  const swap = (arr, start, end) => {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };

  // Ensure k is within the bounds of the array length
  k = k % arr.length;

  // Step 1: Reverse the entire array
  swap(arr, 0, arr.length - 1);

  // Step 2: Reverse the first k elements
  swap(arr, 0, k - 1);

  // Step 3: Reverse the rest of the array
  swap(arr, k, arr.length - 1);

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(rotateArray(arr, 5)); // Output: [4, 5, 6, 7, 8, 1, 2, 3]
