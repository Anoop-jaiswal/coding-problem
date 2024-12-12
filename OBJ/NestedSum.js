const students = [
  {
    name: "Alice",
    age: 10,
    class: "5th",
    fee: 423,
    subjectFees: [
      { mathFee: 100, EnglishFee: 200 },
      { hindiFee: 100, ScienceFee: 200 },
    ],
  },
  {
    name: "Bob",
    age: 12,
    class: "6th",
    fee: 517,
    subjectFees: [
      { mathFee: 100, EnglishFee: 200 },
      { hindiFee: 100, ScienceFee: 200 },
    ],
  },
  {
    name: "Charlie",
    age: 10,
    class: "5th",
    fee: 321,
    subjectFees: [
      { mathFee: 100, EnglishFee: 200 },
      { hindiFee: 100, ScienceFee: 200 },
    ],
  },
  {
    name: "Diana",
    age: 11,
    class: "6th",
    fee: 879,
    subjectFees: [
      { mathFee: 100, EnglishFee: 200 },
      { hindiFee: 100, ScienceFee: 200 },
    ],
  },
  {
    name: "Eve",
    age: 12,
    class: "6th",
    fee: 628,
    subjectFees: [
      { mathFee: 100, EnglishFee: 200 },
      { hindiFee: 100, ScienceFee: 200 },
    ],
  },
];

// Initialize total fee for English
let totalEnglishFee = 0;

// Loop through each student
for (let i = 0; i < students.length; i++) {
  let student = students[i];

  // Loop through the subjectFees for each student
  for (let j = 0; j < student.subjectFees.length; j++) {
    let subjectFee = student.subjectFees[j];

    // Add the English fee to the total if it exists
    if (subjectFee.EnglishFee) {
      totalEnglishFee += subjectFee.EnglishFee;
    }
  }
}

// Output the total fee for English
console.log("Total English fee for all students is:", totalEnglishFee);
