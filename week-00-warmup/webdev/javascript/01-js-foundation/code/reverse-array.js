// Write a program that reverses all the elements of an array

let list1 = [1, 2, 3, 4, 5];
console.log("before reversing:", list1);

let end = list1.length - 1;
let start = 0;

while (start < end) {
    swap(start, end);
    start++, end--;
}

function swap(idx1, idx2) {
    let temp = idx1;
    list1[idx1] = list1[idx2];
    list1[idx2] = list1[temp];
}

console.log("after reversing:", list1);
