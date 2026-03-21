// string manipulation

// finding length
function getLength(value) {
    console.log("Original Data: " + value);
    console.log("Length is ->", value.length); // length
}
getLength("Arbaz Ansari");

// finding index of
let s1 = "arbaz ansari is a good boy.";
console.log("Index is:", s1.indexOf("ansari"));

// lastIndexOf
let s2 = "arbaz ansari ansari is a good boy.";
console.log("LastIndex is:", s2.lastIndexOf("ansari"));

// slice
let s3 = "hello, world!";
console.log("Sliced Data:", s3.slice(2, 5)); // last value is not included

// substring
console.log("SubString:", s3.substring(2, 5));

// substr
console.log("SubStr:", s3.substr(2, 6));

// replace
function letsReplace(oriStr, needToChange, changedTo) {
    return oriStr.replace(needToChange, changedTo);
}
console.log(
    "Replaced String:",
    letsReplace("Happy to see you heathy", "see", "find")
);

// split
function letsSplit(oriStr, value) {
    return oriStr.split(value);
}
console.log("Splitted Data:", letsSplit("hello my name is arbaz ansari", " "));

// trim
let str4 = "           happy bro              ";
console.log("Timed Data:", str4.trim());

// toUpperCase
console.log("toUpperCase:", str4.toUpperCase());

// toLowerCase
console.log("toLowerCase:", str4.toLowerCase());
