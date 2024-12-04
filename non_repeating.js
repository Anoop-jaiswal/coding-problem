const firstNonRepeating = (arr, nth) => {
  const obj = {};
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] == 1) {
      counter++;

      if (counter == nth) {
        return arr[i];
      }
    }
  }

  return null; // Return null if no non-repeating number is found
};

const array = [1, 1, 1, 33, 6, 6, 6, 2, 2, 3, 4, 4, 4, 6];
console.log(firstNonRepeating(array, 1)); // Output: 3
