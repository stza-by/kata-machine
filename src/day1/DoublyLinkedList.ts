type Node<T> = {
    value: T;
    next?: Node<T>;
    prev?: Node<T>;
};

export default class DoublyLinkedList<T> {
    private _length: number = 0;
    private head?: Node<T>;
    private tail?: Node<T>;

    get length(): number {
        return this._length;
    }

    private increaseLength() {
        this._length += 1;
    }

    private decreaseLength() {
        this._length -= 1;
    }

    private initNode(item: T): Node<T> {
        return { value: item } as Node<T>;
    }

    prepend(item: T): void {
        const node = this.initNode(item);

        this.increaseLength();

        if (!this.head || !this.tail) {
            this.head = this.tail = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node.next;
        this.head = node;
    }

    append(item: T): void {
        const node = this.initNode(item);

        this.increaseLength();

        if (!this.head || !this.tail) {
            this.head = node;
            this.tail = node;
            return;
        }

        const currentLast = this.tail;
        currentLast.next = node;
        node.prev = currentLast;
        this.tail = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            return this.prepend(item);
        }

        if (idx === this.length) {
            return this.append(item);
        }

        this.increaseLength();

        const insertAtNode = this.getNodeByIndex(idx);

        const node = this.initNode(item);

        node.prev = insertAtNode;
        node.next = insertAtNode!.next;
        insertAtNode!.next!.prev = node;
        insertAtNode!.next = node;
    }

    get(idx: number): T | undefined {
        return this.getNodeByIndex(idx)?.value;
    }

    remove(item: T): T | undefined {
        const node = this.getNodeByValue(item);

        if (!node) return undefined;

        this.removeNodeFromList(node);

        return node.value;
    }

    removeAt(idx: number): T | undefined {
        const node = this.getNodeByIndex(idx);

        if (!node) {
            return undefined;
        }

        this.removeNodeFromList(node);

        return node.value;
    }

    private removeNodeFromList(node?: Node<T>) {
        if (!node) {
            throw new Error("Node is undefined.");
        }

        const prevNode = node.prev;
        const nextNode = node.next;

        if (this.head === node) {
            this.head = nextNode;
        }

        if (this.tail === node) {
            this.tail = prevNode;
        }

        if (prevNode) {
            prevNode.next = nextNode;
        }

        if (nextNode) {
            nextNode.prev = prevNode;
        }

        this.decreaseLength();
    }

    private getNodeByIndex(idx: number) {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }

        let current = this.head;

        for (let i = 0; i < idx; i++) {
            current = current?.next as Node<T>;
        }

        return current;
    }

    private getNodeByValue(value: T): Node<T> | undefined {
        let current = this.head;

        for (let i = 0; i < this.length; i++) {
            if (current?.value === value) {
                return current;
            }

            current = current?.next as Node<T>;
        }

        return undefined;
    }
}
