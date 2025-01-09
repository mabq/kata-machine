import RingBuffer from "@code/RingBuffer";

test("RingBuffer", function () {
    const buffer = new RingBuffer(3);

    buffer.push(5);
    expect(buffer.pop()).toEqual(5);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(42);
    expect(buffer.pop()).toEqual(undefined);

    buffer.push(42);
    buffer.push(9);
    buffer.push(12);
    buffer.push(51);
    expect(buffer.pop()).toEqual(12);
    expect(buffer.pop()).toEqual(9);
    expect(buffer.pop()).toEqual(42);

    buffer.push(42);
    buffer.enqueue(9);
    buffer.enqueue(12);
    buffer.enqueue(51);
    expect(buffer.pop()).toEqual(42);
    expect(buffer.dequeue()).toEqual(12);
    expect(buffer.dequeue()).toEqual(9);
    expect(buffer.dequeue()).toEqual(undefined);
    expect(buffer.pop()).toEqual(undefined);
    buffer.enqueue(41);
    expect(buffer.pop()).toEqual(41);
});
