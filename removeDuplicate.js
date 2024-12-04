const removeDuplicate = (arr) => {
  const obj = {};
  const uniqArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
      uniqArray.push(arr[i]);
    }
  }
  return uniqArray;
};
const arr = [1, 1, 2, 3, 4, 5, 5, 5, 6, 7];
console.log(removeDuplicate(arr)); // [1, 2, 3, 4, 5, 6, 7]
