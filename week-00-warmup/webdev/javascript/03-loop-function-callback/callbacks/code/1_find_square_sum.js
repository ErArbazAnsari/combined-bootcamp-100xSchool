//* without callback - normal way to call one function in another function
// function findSquare(n) {
//     return n * n;
// }

// function sumOfSquare(a, b) {
//     const num1 = findSquare(a);
//     const num2 = findSquare(b);
//     return num1 + num2;
// }

// console.log(sumOfSquare(6, 4));

//* with callback
function square(n) {
    return n * n;
}
function cube(n) {
    return n * n * n;
}

function sumOfSomething(a, b, fun) {
    let num1 = fun(a);
    let num2 = fun(b);
    return num1 + num2;
}

console.log(sumOfSomething(10, 20, square));
console.log(sumOfSomething(10, 20, cube));
