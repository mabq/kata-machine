import RingBuffer from "@code/RingBuffer";
const RingBuffer = require("../day1/RingBuffer");

const buffer = new RingBuffer();

buffer.push(5);
console.log(buffer.pop() === 5);

buffer.push(42);
buffer.push(9);
buffer.push(12);
console.log(buffer.pop() === 12);
console.log(buffer.pop() === 9);
console.log(buffer.pop() === 42);
console.log(buffer.pop() === undefined);

//buffer.push(42);
//buffer.push(9);
//buffer.push(12);
//expect(buffer.get(2)).toEqual(12);
//expect(buffer.get(1)).toEqual(9);
//expect(buffer.get(0)).toEqual(42);
