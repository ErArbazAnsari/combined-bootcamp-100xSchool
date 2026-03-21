// array methods and functions

let arr1 = [2, 1, 34, 5];
console.log("Original Array:", arr1);

// push and pop
console.log("push new data:", arr1.push(10));
console.log("pop a data:", arr1.pop());

// ship - remove element from front
arr1.shift();
console.log(arr1);

// unship - add element in front
arr1.unshift(100);
console.log(arr1);

// concat()
let arr2 = [30, 32];
const arr3 = arr1.concat(arr2); // return new concatenated array
console.log(arr3);

// forEach
arr3.forEach((e) => {
    console.log("happy");
});

let arr5 = [1, 2, 10, 4, 5, 6];

// map, filter, find, sort
let data = arr5.map((e) => {
    return (e *= e);
});

console.log(data);

// filter
data = arr5.filter((e) => e % 2 == 0);
console.log(data);

// find
data = arr5.find((e) => e > 2);
console.log(data);

// sort
console.log(arr5.sort((a, b) => b - a)); // performing sorting in ascending order
console.log(arr5.sort((a, b) => b - a)); // performing sorting in descending order
