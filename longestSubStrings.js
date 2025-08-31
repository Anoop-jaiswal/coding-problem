const longestSubStr = (str) => {
  let longStr = "";

  for (let i = 0; i < str.length; i++) {
    let seen = "";
    for (let j = i; j < str.length; j++) {
      if (seen.includes(str[j])) {
        break;
      }
      seen += str[j];
    }
    if (seen.length > longStr.length) {
      longStr = seen;
    }
  }

  return longStr;
};

console.log(longestSubStr("abcdddas"));
