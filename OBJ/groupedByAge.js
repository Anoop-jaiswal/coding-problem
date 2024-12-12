const students = [
  { name: "amit", age: 10, class: 3 },
  { name: "ashok", age: 12, class: 4 },
  { name: "ram", age: 11, class: 6 },
  { name: "sita", age: 11, class: 7 },
  { name: "geeta", age: 12, class: 1 },
  { name: "anuj", age: 10, class: 3 },
];

const groupByAge = (students) => {
  let obj = {};
  for (let i = 0; i < students.length; i++) {
    if (!obj[students[i].age]) {
      obj[students[i].age] = [];
    }
    obj[students[i].age].push(students[i]);
  }
  return obj;
};

console.log(groupByAge(students));
