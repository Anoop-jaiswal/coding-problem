const isPalindrome = (input) => {
  const str = input.toString(); //type conversion
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr === str;
};

const str = 121;
console.log(isPalindrome(str));
