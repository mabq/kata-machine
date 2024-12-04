class RingBuffer {
    constructor() {
        // An internal array buffer is created in memory, of size length multiplied by BYTES_PER_ELEMENT bytes, filled with zeros
        this.typedArray = new Int8Array(5);
        this.head = 2;
        this.tail = 2;
    }

    getIndex(ringIndex) {
        let length = this.typedArray.length;
        return ringIndex >= 0
            ? ringIndex % length
            : length + (ringIndex % length);
    }

    arrayIsfull() {
        return this.tail - this.head >= this.typedArray.length;
    }

    push(value) {
        if (this.arrayIsfull()) {
            // the array is full, should create a new array of bigger capacity
            console.log(`Unable to push ${value} - array is full`);
            return undefined;
        }
        const index = this.getIndex(this.tail);
        this.typedArray[index] = value;
        this.tail++;
        console.log(`push ${value} at index ${index}`);
        return value;
    }

    pop() {
        if (this.tail <= this.head) {
            console.log(`Unable to pop value - array is empty`);
            return null;
        }
        this.tail--;
        const index = this.getIndex(this.tail);
        const value = this.typedArray[index];
        console.log(`pop ${value} from index ${index}`);
        return value;
    }

    enqueue(value) {
        if (this.arrayIsfull()) {
            // the array is full, should create a new array of bigger capacity
            console.log(`Unable to enqueue ${value} - array is full`);
            return undefined;
        }
        this.head--;
        const index = this.getIndex(this.head);
        this.typedArray[index] = value;
        console.log(`enqueue ${value} at index ${index}`);
        return value;
    }

    dequeue() {
        if (this.head >= this.tail) {
            console.log(`Unable to dequeue value - array is empty`);
            return null;
        }
        const index = this.getIndex(this.head);
        const value = this.typedArray[index];
        this.head++;
        console.log(`dequeue ${value} from index ${index}`);
        return value;
    }
}

const buffer = new RingBuffer();

console.log(buffer.push(1));
console.log(buffer.push(2));
console.log(buffer.push(3));
console.log(buffer.push(4));
console.log(buffer.enqueue(5));
console.log(buffer.push(6));

console.log(buffer.pop());
console.log(buffer.pop());
console.log(buffer.pop());
console.log(buffer.pop());
console.log(buffer.pop());

console.log(`Length: ${buffer.typedArray.length}`);
console.log(`Length: ${buffer.typedArray.BYTES_PER_ELEMENT}`);
