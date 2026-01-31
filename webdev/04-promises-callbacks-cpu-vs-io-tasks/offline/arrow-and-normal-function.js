// normal fun
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));

// arrow fun
const mul = (a, b) => a * b;
console.log(mul(10, 20));

//map
const data = [1, 2, 3, 4, 5];
let ans = [];
data.map((ele) => ans.push(ele * 2));
console.log(ans);

// filtering => give me all the even number from data
console.log("all even value");
data.filter((ele) => {
    if (ele % 2 == 0) console.log(ele);
});
