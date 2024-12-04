const swap = (a, b) => {
  a = a + b;// 3
  b = a - b; //3-2 - 1
  a = a - b; //3-1 -2

  return { a, b };
};

console.log(swap(1, 2));
