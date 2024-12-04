const checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (typeof num === "number") {
      if (num % 2 == 0) {
        resolve(`${num} is a even number`);
      } else {
        reject(`${num} is a odd number`);
      }
    } else {
      reject("not a valid number");
    }
  });
};

checkEven(2)
  .then((msg) => {
    console.log(msg);
    return 1;
  })
  .then((returnedValue) => {
    console.log(returnedValue);
    return 2;
  })
  .then((returnedValue) => {
    console.log(returnedValue);
    return 2;
  })
  .catch((err) => {
    console.log(err);
  });
