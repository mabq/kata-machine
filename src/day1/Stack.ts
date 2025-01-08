class Node<T> {
    public value: T;
    public prev: Node<T> | undefined;

    constructor(value: T, prev = undefined) {
        this.value = value;
        this.prev = prev;
    }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(value: T): void {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.prev = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        const head = this.head;
        this.head = this.head.prev;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

