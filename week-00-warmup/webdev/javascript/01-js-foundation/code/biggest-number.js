// Write a program to find the biggest number from an array

let list1 = [50, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ans = list1[0];

for (const element of list1) {
    if (ans < element) {
        ans = element;
    }
}
console.log("original array:", list1);
console.log("biggest number: ", ans);
