const groupAnagrams = (words) => {
  const group = {};

  for (let word of words) {
    const key = word.split("").sort().join("");

    if (!group[key]) {
      group[key] = [];
    }

    group[key].push(word);
  }

  return Object.values(group);
};

const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
