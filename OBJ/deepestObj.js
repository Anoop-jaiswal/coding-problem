// Given a nested object, find the deepest nested object along with its depth.

const nested = {
  a: {
    b: {
      c: {
        d: { e: 5 },
      },
    },
  },
};

// { e: 5 }, depth: 4
const deepestObj = (nested) => {
  const obj = {};
  let count = 0;
  const helper = (nested) => {
    for (key in nested) {
      if (typeof nested[key] === "object") {
        count++;
        helper(nested[key]);
      } else {
        obj[key] = nested[key];
      }
    }
  };
  helper(nested);
  return [obj, count];
};

console.log(deepestObj(nested));
