type Node<T> = {
    value?: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    private get_node_by_idx(idx: number): Node<T> | undefined {
        let n = this.head;
        let i = 0;
        for (; i < idx; ++i) {
            if (!n) {
                return undefined;
            }
            n = n?.next;
        }
        return n;
    }

    private get_node_by_value(value: T): Node<T> | undefined {
        let n = this.head;
        while (true) {
            if (!n) {
                return undefined;
            }
            if (n.value === value) {
                return n;
            }
            n = n.next;
        }
    }

    private remove_node(n: Node<T> | undefined): T | undefined {
        if (!n) {
            return undefined;
        }

        const prev = n.prev;
        const next = n.next;

        if (prev && next) {
            prev.next = next;
            next.prev = prev;
        } else if (!prev && next) {
            next.prev = undefined;
            this.head = next;
        } else if (prev && !next) {
            prev.next = undefined;
            this.tail = prev;
        } else {
            this.head = undefined;
            this.tail = undefined;
        }

        this.length--;

        return n.value;
    }

    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.length = 0;
    }

    prepend(item?: T): void {
        const n = {
            value: item,
            next: this.head,
            prev: undefined,
        };
        if (!this.head) {
            this.head = this.tail = n;
        } else {
            this.head.prev = n;
            this.head = n;
        }
        this.length++;
    }

    append(item?: T): void {
        if (!this.tail) {
            return this.prepend(item);
        }
        const n = {
            value: item,
            next: undefined,
            prev: this.tail,
        };
        this.tail.next = n;
        this.tail = n;
        this.length++;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length) {
            this.append(item);
            return;
        }

        // `idx` might be any number and the list might be empty, same behaviour as JavaScript arrays
        let curr = this.head;
        let i = 0;
        for (; i < idx; ++i) {
            if (!curr) {
                this.append(); // fill missing node with `undefined`
                curr = this.tail;
            }
            curr = curr?.next;
        }

        if (!curr) {
            this.append(item);
            return;
        }

        const prev = curr.prev;
        const next = curr;

        const n = {
            value: item,
            prev,
            next,
        };

        // @ts-ignore
        prev.next = n;
        next.prev = n;

        this.length++;
    }

    remove(value: T): T | undefined {
        return this.remove_node(this.get_node_by_value(value));
    }

    get(idx: number): T | undefined {
        return this.get_node_by_idx(idx)?.value;
    }

    removeAt(idx: number): T | undefined {
        return this.remove_node(this.get_node_by_idx(idx));
    }
}
