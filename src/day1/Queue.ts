type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { value: item, next: undefined };
        if (!this.tail) {
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

        const head = this.head;
        this.head = this.head.next;
        this.length--;

        if (this.length === 0) {
            this.tail = undefined;
        }

        return head.value;
    }

    peek(): T | undefined {
        return this.tail?.value;
    }
}
