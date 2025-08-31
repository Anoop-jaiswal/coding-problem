const targetDifferences = (arr, target) => {
  let pairs = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === target) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
};

const arr = [1, 2, 4, 5, 6, 6, 7, 8];
console.log(targetDifferences(arr, 2));
