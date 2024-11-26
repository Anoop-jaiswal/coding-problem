### Occurrence of character in string

```
const occurence = (char) => {
  const obj = {};

  for (let i = 0; i < char.length; i++) {
    if (!obj[char[i]]) {
      obj[char[i]] = 1;
    } else {
      obj[char[i]]++;
    }
  }

  return obj;
};

console.log(occurence("javascript")); //{ j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
console.log(occurence("jaavaa")); //{ j: 1, a: 4, v: 1 }
```


### first non repeating character in a string
```
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
```