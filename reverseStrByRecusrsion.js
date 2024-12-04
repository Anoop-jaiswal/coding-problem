const reverse = (str) => {
  if (str.length == 0) {
    return "";
  } else {
    let lastChar = str[str.length - 1];
    let remainingChar = "";

    for (let i = 0; i < str.length - 1; i++) {
      remainingChar += str[i];
    }

    return lastChar + reverse(remainingChar);
  }
};

console.log(reverse("abcd"));
