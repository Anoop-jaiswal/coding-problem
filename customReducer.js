Array.prototype.myReduce = function (callback, initialValue) {
  // Check if the array is empty and no initial value is provided
  if (this.length === 0 && initialValue === undefined) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0]; // Initialize the accumulator
  let startIndex = initialValue !== undefined ? 0 : 1; // Determine the starting index for the loop

  // Loop through each element in the array
  for (let i = startIndex; i < this.length; i++) {
    // Check if the element is defined to handle sparse arrays
    if (i in this) {
      // Call the callback function, updating the accumulator
      accumulator = callback(accumulator, this[i], i, this);
    }
  }

  return accumulator; // Return the final accumulated value
};

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
