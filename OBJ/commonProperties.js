// Given two objects, find the keys and their corresponding values that are common in both.

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };

// Expectd Output
// { b: 2 }

const commonProperties = (obj1, obj2) => {
  const common = {};

  for (let key in obj1) {
    if (obj2[key] === obj1[key]) {
      common[key] = obj1[key];
    }
  }

  return common;
};

console.log(commonProperties(obj1, obj2));
// Expected Output: { b: 2 }

console.log(commonProperties(obj1, obj2));
