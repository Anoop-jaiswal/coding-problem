const nested = {
  a: {
    b: {
      c: {
        d: 5,
      },
    },
    e: 10,
  },
};

// Expected output
// {
//   "a.b.c.d": 5,
//   "a.e": 10,
// }

const flattenNestedObj = (nested) => {
  const obj = {};
  const nestedHelper = () => {
    for (let key in nested) {
      console.log(typeof nested[key]);

      if (typeof nested[key] === "object") {
      }
    }
  };

  nestedHelper(nested);
  return obj;
};

console.log(flattenNestedObj(nested));
