class LinkedList<T> {
    private elementsCount: number = 0;
    private head: Node<T> | undefined;

    constructor() { }

    push(value: T): void {
        if (this.head === undefined) {
            this.head = new Node<T>(value, undefined);
        } else {
            let element: Node<T> | undefined = this.head;
            while (element.next !== undefined) {
                element = element.next
            }
            element.next = new Node<T>(value, undefined);
        }
        this.elementsCount++;
    }

    pop(): any {
        let value: T | undefined;

        if (this.head === undefined) {
            return undefined;
        } else if (this.elementsCount == 1) {
            value = this.head.value;
            delete this.head;
        } else {
            let element: Node<T> | undefined = this.head
            
            while(element.next !== undefined && element.next.next !== undefined){
                element = element.next
            }
            if (element.next !== undefined){
                value = element.next.value
                delete element.next
            }
        }

        this.elementsCount--;
        return value;
    }

    shift(): any {
        let value: T | undefined;

        if (this.head === undefined) {
            return undefined
        }

        value = this.head.value
        this.head = this.head.next

        this.elementsCount--;

        return value
    }

    unshift(value: T): void {
        const element = new Node(value,this.head)
        this.head = element
        this.elementsCount++
    }

    count(): number {
        return this.elementsCount;
    }

    delete(value: T): void {

        if (this.head === undefined) {
            return
        } else if (this.head.value == value) {
            this.head = this.head.next
            this.elementsCount--;
        } else {
            let element: Node<T> | undefined = this.head
            
            while(element.next !== undefined && element.next.next !== undefined){
                
                if (element.next.value == value) {
                    element.next = element.next.next
                    this.elementsCount--;
                }
                element = element.next
            }
        }
    }
}

class Node<T> {
    next: Node<T> | undefined;

    constructor(readonly value: T, next: Node<T> | undefined) {
        this.next = next;
    }
}

export default LinkedList;
