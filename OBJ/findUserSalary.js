// Given a list of employees with salaries, return
// the names of employees earning above a certain threshold.

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 40000 },
  { name: "Charlie", salary: 60000 },
  { name: "Dave", salary: 30000 },
];
const threshold = 45000;

// Expected Output
// ["Alice", "Charlie"]

const userAboveThereshold = (employees, threshold) => {
  const result = [];

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary > threshold) {
      result.push(employees[i].name);
    }
  }
  return result;
};

console.log(userAboveThereshold(employees, threshold));
