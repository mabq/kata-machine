export default class RingBufferUint8 {
    private buffer: Int8Array;
    private head: number;
    private tail: number;

    constructor(length: number) {
        this.buffer = new Int8Array(length);
        this.head = 0;
        this.tail = 0;
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

    push(value: number): void {
        // exclusive put: write, then move
        this.checkValue(value);
        if (this.tail - this.head >= this.buffer.length) {
            console.log(`Array is full - cannot push ${value}`);
        } else {
            const i = this.getRingIndex(this.tail);
            this.buffer[i] = value;
            this.tail++;
        }
    }

    pop(): number | void {
        // exclusive get: move, then get
        if (this.tail <= this.head) {
            console.log("Array is empty");
        } else {
            this.tail--;
            const i = this.getRingIndex(this.tail);
            const v = this.buffer[i];
            this.buffer[i] = 0; // free memory, 0 is the base value
            return v;
        }
    }

    enqueue(value: number): void {
        // inclusive put: move, then write
        this.checkValue(value);
        if (this.tail - this.head >= this.buffer.length) {
            console.log(`Array is full - cannot enqueue ${value}`);
        } else {
            this.head--;
            const i = this.getRingIndex(this.head);
            this.buffer[i] = value;
        }
    }

    dequeue(): number | void {
        // exclusive get: get, then move
        if (this.tail <= this.head) {
            console.log("Array is empty");
        } else {
            const i = this.getRingIndex(this.head);
            const v = this.buffer[i];
            this.buffer[i] = 0; // free memory, 0 is the base value
            this.head++;
            return v;
        }
    }

    at(index: number): number | void {
        if (
            this.tail != this.head &&
            index >= this.head &&
            index <= this.tail
        ) {
            const i = this.getRingIndex(index);
            return this.buffer.at(i);
        }
        return undefined;
    }

    getLength() {
        console.log(this.buffer.length);
    }

    bytes_per_element() {
        console.log(this.buffer.BYTES_PER_ELEMENT);
    }
}
