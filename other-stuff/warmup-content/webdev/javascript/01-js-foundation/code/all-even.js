// Write a program prints all the even numbers in an array

let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = [];

list1.filter((ele) => {
    if (ele % 2 == 0) ans.push(ele);
});

console.log("original array:", list1);
console.log("all even only: ", ans);
