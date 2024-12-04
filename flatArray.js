// Flatten a nested array (of varying depths) into a single array.
const Flatten = (arr) => {
  let flatArr = [];

  const flatHelper = (insideArr) => {
    for (let i = 0; i < insideArr.length; i++) {
      if (Array.isArray(insideArr[i])) {
        flatHelper(insideArr[i]);
      } else {
        flatArr.push(insideArr[i]);
      }
    }
  };

  flatHelper(arr);
  return flatArr;
};

const arr = [1, [2, [3, [4, 5, [6, 7, [8, [9]]]]]]];
console.log(Flatten(arr)); // [1,2,3,4,5,6,7,8,9]
