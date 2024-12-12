// Given an array of objects with arrays as values, identify all unique values across these arrays.

const data = [
  { id: 1, tags: ["red", "blue", "green"] },
  { id: 2, tags: ["blue", "yellow"] },
  { id: 3, tags: ["green", "yellow", "pink"] },
];

// expected OUTPUT
// ["red", "blue", "green", "yellow", "pink"]

const uniqueValue = (data) => {
  const arr = [];
  const obj = {};

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].tags.length; j++) {
      if (!obj[data[i].tags[j]]) {
        obj[data[i].tags[j]] = true;
        arr.push(data[i].tags[j]);
      }
    }
  }

  return arr;
};

console.log(uniqueValue(data));
