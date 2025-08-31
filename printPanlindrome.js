const isPalindrom = (num) => {
  if (num < 0) return false;

  let original = num;

  let reverse = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reverse = reverse * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return reverse === original;
};

const printPalindrom = (range) => {
  const palindromNumber = [];

  for (let i = 10; i <= range; i++) {
    if (isPalindrom(i)) {
      palindromNumber.push(i);
    }
  }

  return palindromNumber;
};

console.log(printPalindrom(100));
