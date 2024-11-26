const firstNonReapeatingChar = (char) => {
  const obj = {};

  for (let i = 0; i < char.length; i++) {
    if (!obj[char[i]]) {
      obj[char[i]] = 1;
    } else {
      obj[char[i]]++;
    }
  }

  for (key in obj) {
    if (obj[key] == 1) {
      return key;
    }
  }

  return null;
};

console.log(firstNonReapeatingChar("javascripts")); // j
console.log(firstNonReapeatingChar("aajgjaa")); //g
console.log(firstNonReapeatingChar("aajjaac")); //c
console.log(firstNonReapeatingChar("aajjaa")); // null
