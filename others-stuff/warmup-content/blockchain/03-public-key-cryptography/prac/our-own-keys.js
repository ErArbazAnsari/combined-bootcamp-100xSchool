import * as ed from "@noble/ed25519";

async function main() {
    const { secretKey, publicKey } = await ed.keygenAsync();

    const msg = new TextEncoder().encode("hello world");
    const signature = await ed.signAsync(msg, secretKey);
    const isValid = await ed.verifyAsync(signature, msg, publicKey);

    console.log(isValid);
    console.log("secretKey in byteHex:", ed.etc.bytesToHex(secretKey));
    console.log("publicKey in byteHex:", ed.etc.bytesToHex(publicKey));
    console.log("signature:", signature);
}

await main();
