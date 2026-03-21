import { Keypair } from "@solana/web3.js";

async function main() {
    const key = Keypair.generate(); // generate is a static fun of keypair class

    console.log("public key: ", key.publicKey.toBytes());
    console.log("private key: ", key.secretKey);
}

main();
