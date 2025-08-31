const targetSum = (arr, target) => {
  let pair = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push([arr[i], arr[j]]);
      }
    }
  }

  return pair;
};

const arr = [1, 2, 4, 5, 6, 6, 7, 8];
console.log(targetSum(arr, 12));
