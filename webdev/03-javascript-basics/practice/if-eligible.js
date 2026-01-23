function eligible(age) {
    return age >= 18 ? "allowed" : "not allowed";
}

console.log(eligible(18));
console.log(eligible(17));
console.log(eligible(20));
