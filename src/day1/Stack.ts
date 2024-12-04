type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    private tail?: Node<T>;
    public length: number;

    constructor() {
        this.tail = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const tail = this.tail;
        const newNode: Node<T> = { value: item, prev: tail };
        this.tail = newNode;
        this.length++;
    }

    pop(): T | undefined {
        if (!this.tail) return undefined;
        const tail = this.tail;
        this.tail = this.tail.prev;
        this.length--;
        return tail?.value;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}

