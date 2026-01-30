let counter = 0;

function callback() {
    console.log(counter);
    counter++;
}

setInterval(callback, 1000);

let heavy = 0;
for (let i = 0; i < 4000000000; i++) {
    heavy += i;
}
console.log(heavy);
