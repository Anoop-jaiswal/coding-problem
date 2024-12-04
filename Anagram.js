const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  const obj1 = {};
  const obj2 = {};

  //counting occurence
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
  }

  //comparing objects
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const str1 = "abca";
const str2 = "ccba";

console.log(isAnagram(str1, str2)); //false

const str3 = "abca";
const str4 = "cbaa";
console.log(isAnagram(str3, str4)); //false
