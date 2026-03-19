const str = "arbaz ansari";
const encode = new TextEncoder().encode(str);
const uint8array = new Uint8Array(encode);
const base64 = Buffer.from(uint8array).toString("base64");

console.log("original string:", str);
console.log("textEncoded:", encode);
console.log("Uint8Array:", uint8array);
console.log("base64", base64);
