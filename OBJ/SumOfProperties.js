const students = [
  { name: "Alice", age: 10, class: "5th", fee: 423 },
  { name: "Bob", age: 12, class: "6th", fee: 517 },
  { name: "Charlie", age: 10, class: "5th", fee: 321 },
  { name: "Diana", age: 11, class: "6th", fee: 879 },
  { name: "Eve", age: 12, class: "6th", fee: 628 },
];

// Initialize a variable to store the sum
let totalFee = 0;

// Iterate through the array of students and add their fees to totalFee
for (let i = 0; i < students.length; i++) {
  totalFee += students[i].fee;
}

// Output the total fee
console.log(totalFee);
