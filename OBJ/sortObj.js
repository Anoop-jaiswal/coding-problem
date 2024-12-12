// Given an array of objects, sort them in descending order by a specific key.
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 88 },
];

// expect output
// [
//   { name: "Bob", marks: 92 },
//   { name: "Charlie", marks: 88 },
//   { name: "Alice", marks: 85 },
// ]

const sort = (students) => {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - 1; j++) {
      if (students[j].marks < students[j + 1].marks) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }

  return students;
};

console.log(sort(students));
