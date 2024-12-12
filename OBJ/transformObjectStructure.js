const keyValuePairs = [
  { key: "name", value: "Alice" },
  { key: "age", value: 25 },
  { key: "city", value: "New York" },
];

// Given an array of key-value pair objects, transform it into a single
// object where keys are the key values and the values are the value fields.
// Expected output
// {
//   name: "Alice",
//   age: 25,
//   city: "New York",
// }

const transform = (keyValuePairs) => {
  let obj = {};
  for (let i = 0; i < keyValuePairs.length; i++) {
    if (!obj[keyValuePairs[i].key]) {
      obj[keyValuePairs[i].key] = keyValuePairs[i].value;
    }
  }
  return obj;
};

console.log(transform(keyValuePairs));
