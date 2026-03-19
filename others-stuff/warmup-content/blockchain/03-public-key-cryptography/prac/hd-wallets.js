import { generateMnemonic, mnemonicToSeedSync } from "bip39";

function main() {
    const memonic = generateMnemonic(256);
    const seed = mnemonicToSeedSync(memonic);

    console.log("memonic:", memonic);
    console.log("seed:", seed);
}

main();
