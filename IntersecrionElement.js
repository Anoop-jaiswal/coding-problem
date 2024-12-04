const intersection = (arr1, arr2) => {
  const common = [];
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < arr1.length; i++) {
    obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    obj2[arr2[i]] = (obj2[arr2[i]] || 0) + 1;
  }

  // comparing key of two object
  for (let key in obj1) {
    if (key in obj2) {
      const minimumOccurence = Math.min(obj1[key], obj2[key]);
      for (let i = 1; i <= minimumOccurence; i++) {
        common.push(Number(key));
      }
    }
  }

  return common;
};

const arr1 = [4, 1, 2, 3, 4, 4];
const arr2 = [4, 5, 4, 7, 8, 4];

console.log(intersection(arr1, arr2));
