const students = [
  { name: "Alice", age: 10, class: "5th" },
  { name: "Bob", age: 12, class: "6th" },
  { name: "Charlie", age: 10, class: "5th" },
  { name: "Diana", age: 11, class: "6th" },
  { name: "Eve", age: 12, class: "6th" },
];

const groupedByAge = {};

// Loop through each student in the array
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const age = student.age;

  // If the age doesn't exist as a key, create an empty array for it
  if (!groupedByAge[age]) {
    groupedByAge[age] = [];
  }

  // Add the student to the array for their respective age
  groupedByAge[age].push(student);
}

console.log(groupedByAge);
