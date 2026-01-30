import fs from "fs";

fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
        console.log("something wrong", err);
    }
    console.log(data);
});
console.log("working...");
