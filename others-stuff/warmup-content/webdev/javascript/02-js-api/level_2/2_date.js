// date methods and functions

let currentDate = new Date();
console.log(currentDate);

currentDate = Date.now();
console.log(currentDate);

currentDate = Date.UTC();
console.log(currentDate);

const date = new Date();
console.log(date.getMonth() + 1);
console.log(date.getFullYear());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

// timer
setInterval(() => {
    console.log(new Date().getTime());
}, 1000);
