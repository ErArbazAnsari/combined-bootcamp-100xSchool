// encoding into base58 -> solana uses -> ok
import "bs58";

const str = "arbaz ansari";
const binaryArray = new TextEncoder().encode(str);
const bsRep = bs58.encode(binaryArray);

console.log("original string:", str);
console.log("binaryArray:", binaryArray);
console.log("bs58 Representation:", bsRep);
