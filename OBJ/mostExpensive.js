const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 600 },
  { name: "Tablet", price: 400 },
  { name: "Smartwatch", price: 200 },
];

// Expected output
// { name: "Laptop", price: 800 }

function mostExpensive(products) {
  for (let i = 0; i < products.length; i++) {
    let mostExp = products[0];
    if (products[i].price > mostExp.price) {
      mostExp = products[i];
    }
    return products[i];
  }
  return null;
}

console.log(mostExpensive(products));
