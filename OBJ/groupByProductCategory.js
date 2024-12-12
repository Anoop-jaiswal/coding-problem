const products = [
  { name: "Laptop", price: 800, category: "Electronics", rating: 4.5 },
  { name: "Headphones", price: 100, category: "Electronics", rating: 4.2 },
  { name: "Banana", price: 1, category: "Grocery", rating: 4.0 },
  { name: "Orange", price: 1.2, category: "Grocery", rating: 4.1 },
  { name: "T-shirt", price: 15, category: "Clothing", rating: 4.3 },
  { name: "Jeans", price: 40, category: "Clothing", rating: 4.7 },
];

const groupByProductCategory = (products) => {
  let obj = {};

  for (let i = 0; i < products.length; i++) {
    if (!obj[products[i].category]) {
      obj[products[i].category] = [];
    }
    obj[products[i].category].push(products[i]);
  }
  return obj;
};

console.log(groupByProductCategory(products));

// EXPECTED OUTPUT
// {
//   Electronics: [
//     { name: "Laptop", price: 800, category: "Electronics", rating: 4.5 },
//     { name: "Headphones", price: 100, category: "Electronics", rating: 4.2 },
//   ],
//   Grocery: [
//     { name: "Banana", price: 1, category: "Grocery", rating: 4.0 },
//     { name: "Orange", price: 1.2, category: "Grocery", rating: 4.1 },
//   ],
//   Clothing: [
//     { name: "T-shirt", price: 15, category: "Clothing", rating: 4.3 },
//     { name: "Jeans", price: 40, category: "Clothing", rating: 4.7 },
//   ],
// }
