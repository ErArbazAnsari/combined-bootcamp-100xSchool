const crypto = require("crypto");

const req = "0000";
let ans = new Map();
const limit = 100000;

console.log("finding...");
for (let i = 0; i <= limit; i++) {
    const result = crypto
        .createHash("sha256")
        .update("100xdevs" + i.toString())
        .digest("hex")
        .toString();
    if (result.startsWith(req)) {
        console.log("✅ Found a value:", i);
        ans.set(i, result);
    }
}
console.log(ans);
console.log(`these hashes are found which starts from ${req}.`);
console.log("all keys:", ans.keys());
