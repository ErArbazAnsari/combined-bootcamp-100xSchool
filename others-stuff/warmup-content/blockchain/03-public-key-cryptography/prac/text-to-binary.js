const data = "HW2djtTA8cBwQ3puNPcthTKztf42FLRYnZReNpKqUioq";

const result = new TextEncoder().encode(data);
console.log(result);

// console.log(result.BYTES_PER_ELEMENT);
// console.log(result.buffer);

// console.log(new Uint8Array([1919])); // more that 8 bit just store the 8 bits and ignore
