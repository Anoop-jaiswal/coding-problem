const substring = (str) => {
  let subStr = [];

  if (str.length === 1) {
    throw new Error("minimum length of string should be 2");
  }

  for (let i = 0; i < str.length; i++) {
    let temp = "";
    for (let j = i; j < str.length; j++) {
      temp += str[j];
      subStr.push(temp);
    }
  }

  return subStr;
};

console.log(substring("abc"));
