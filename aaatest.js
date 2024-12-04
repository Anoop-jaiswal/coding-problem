const firstNonRepeating = (arr) => {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) {
      return arr[i];
    }
  }
};

console.log(firstNonRepeating([1, 2, 1, 2, 2, 4, 4, 4, 2, 0]));
