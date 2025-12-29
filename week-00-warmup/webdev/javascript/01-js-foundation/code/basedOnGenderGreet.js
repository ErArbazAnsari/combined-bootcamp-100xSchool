function greetBasedOnGender(name, gender) {
    return gender === "male"
        ? `hello ${name}, how are u. you gender is ${gender}`
        : `nice to meet you ${name}`;
}

console.log(greetBasedOnGender("arbaz", "male"));
console.log(greetBasedOnGender("divya", "female"));
