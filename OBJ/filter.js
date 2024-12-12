const data = [
  { id: 1, details: { status: "active" } },
  { id: 2, details: { status: "inactive" } },
  { id: 3, details: { status: "active" } },
];
const filterStatus = "active";

// Expected output
// [
//   { id: 1, details: { status: "active" } },
//   { id: 3, details: { status: "active" } },
// ]

const filter = (data) => {
  const obj = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].details.status === "active") {
      obj.push(data[i]);
    }
  }

  return obj;
};

console.log(filter(data));
