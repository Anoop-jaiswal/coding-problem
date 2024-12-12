// You are given two objects representing sales data for two months.
// Merge these objects, summing the values for matching keys.

const sales1 = { apples: 10, bananas: 5, oranges: 8 };
const sales2 = { bananas: 7, oranges: 3, grapes: 4 };

// Expected outPut
// {
//   apples: 10,
//   bananas: 12,
//   oranges: 11,
//   grapes: 4,
// }

const mergeTwoSum = (sales1, sales2) => {
  const obj = {};
  for (let key in sales1) {
    obj[key] = sales1[key];
  }

  for (let key in sales2) {
    if (obj[key] !== undefined) {
      obj[key] = obj[key] + sales2[key];
    } else {
      obj[key] = sales2[key];
    }
  }
  return obj;
};

console.log(mergeTwoSum(sales1, sales2));
