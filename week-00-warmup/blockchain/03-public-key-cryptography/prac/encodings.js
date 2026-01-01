function arrayToHex(byteArray) {
    let hexString = "";
    for (let i = 0; i < byteArray.length; i++) {
        hexString += byteArray[i].toString(16).padStart(2, "0");
    }
    return hexString;
}

const str = "hello";

const byteArray = new TextEncoder().encode(str);
console.log(arrayToHex(byteArray));
