export default class RingBufferUint8 {
    public buffer: Int8Array;
    public head: number;
    public tail: number;

    constructor(length: number) {
        let m = Math.floor(length / 2);
        this.buffer = new Int8Array(length);
        this.head = m;
        this.tail = m;
    }

    getRingIndex(pos: number): number {
        const l = this.buffer.length;
        let i = pos % l;
        if (i < 0) {
            i = l + i;
        }
        // -0 is not less than 0
        return Math.abs(i);
    }

    checkValue(v: number): void {
        if (v < 0 || v > 255) {
            throw new Error("Value must be a number between 0 and 255");
        }
    }

    //checkSpace(): boolean {
    //    return (
    //        this.tail >= this.head && this.tail - this.head < this.buffer.length
    //    );
    //}

    push(value: number): void {
        this.checkValue(value);
        const newTail = this.tail + 1;
        if (newTail - this.head >= this.buffer.length) {
            console.log("Array is full");
        } else {
            this.tail = newTail;
            const i = this.getRingIndex(newTail);
            this.buffer[i] = value;
        }
    }

    pop(): number | void {
        const newTail = this.tail - 1;
        if (newTail < this.head) {
            console.log("Empty array");
        } else {
            const i = this.getRingIndex(this.tail);
            const v = this.buffer[i];
            this.tail = newTail;
            return v;
        }
    }

    peek(index: number): number | undefined {
        const i = this.getRingIndex(index);
        return this.buffer[i];
    }
}
