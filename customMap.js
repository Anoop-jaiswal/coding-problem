Array.prototype.CustomMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      newArray.push(callback(this[i], i, this));
    }
  }

  return newArray;
};

const array = [1, 2, 3, 4, 5];

const mappedArray = array.CustomMap((item) => item * 2);
console.log(mappedArray);
