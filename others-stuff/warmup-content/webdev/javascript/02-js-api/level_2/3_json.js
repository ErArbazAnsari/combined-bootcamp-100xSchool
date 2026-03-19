// json in javascript
const user = {
    firstName: "Arbaz Ansari",
    age: 20,
    address: "gurgaon",
};

console.log(user["firstName"]);
console.log(user["age"]);
console.log(user["address"]);

// json.parse
// json.stringify

const userString = JSON.stringify(user);
console.log(userString);
console.log(typeof userString);

// again converting to json
const finalJson = JSON.parse(userString);
console.log(finalJson);
console.log(typeof finalJson);
