import fs from "node:fs";

const data = fs.readFileSync("data.json", "utf-8");
console.log(data);
