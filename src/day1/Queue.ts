class Node<T> {
    public value: T;
    public next: Node<T> | undefined;

    constructor(value: T, next = undefined) {
        this.value = value;
        this.next = next;
    }
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(value: T): void {
        const newNode = new Node(value);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}

