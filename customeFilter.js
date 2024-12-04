Array.prototype.customFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
  }

  return newArray;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterdArrray = array.customFilter((num) => num % 2 === 0);
console.log(filterdArrray);
