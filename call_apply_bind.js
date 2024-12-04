function fullname(age, location) {
  return this.firstName + " " + this.lastName + " " + age + " " + location;
}

const obj = {
  firstName: " anoop",
  lastName: "jaiswal",
};

console.log(fullname.call(obj, 28, "india"));
console.log(fullname.apply(obj, [28, "india"]));

const bidnExample = fullname.bind(obj, 28, "india");
console.log(bidnExample());
