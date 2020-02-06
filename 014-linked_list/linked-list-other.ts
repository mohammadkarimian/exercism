export default class LinkedList<T> {
    private first: Node<T>
    private last: Node<T>

    public push(x: T): void {
        if (this.isEmpty()) {
            this.first = new Node<T>({ value: x })
            this.last = this.first
        }
        else {
            const node = new Node<T>({ value: x, previous: this.last })
            this.last.next = node
            this.last = node
        }
    }

    public pop(): T {
        const x = this.last.value
        this.last = this.last.previous
        return x
    }

    public shift(): T {
        const x = this.first.value
        this.first = this.first.next
        return x
    }

    public unshift(x: T): void {
        if (this.isEmpty()) {
            this.first = new Node<T>({ value: x })
            this.last = this.first
        }
        else {
            const node = new Node<T>({ value: x, next: this.first })
            this.first.previous = node
            this.first = node
        }
    }

    public count(): number {
        let count = 0
        let node = this.first
        while (node) {
            count++
            node = node.next
        }

        return count
    }

    public delete(x: T): void {
        if (this.isEmpty()) {
            return
        }

        if (this.first.value === x) {
            this.shift()
        }
        else if (this.last.value === x) {
            this.pop()
        }
        else {
            this.deleteInterposedNode(x)
        }
    }

    private isEmpty(): boolean {
        return this.first === undefined || this.last === undefined
    }

    private deleteInterposedNode(x: T): void {
        let node = this.first.next
        if (node === undefined) {
            return
        }

        while (node !== this.last) {
            if (node.value === x) {
                node.previous.next = node.next
                node.next.previous = node.previous
                break
            }

            node = node.next
        }
    }
}

class Node<T> {
    public next: Node<T>
    public previous: Node<T>
    public value: T

    public constructor(init?: Partial<Node<T>>) {
        Object.assign(this, init)
    }
}