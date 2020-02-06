export default class BinarySearch {

    array: Array<number>

    constructor(sortedArray: number[]) {
        this.array = Object.assign([], sortedArray)
        if (!this.isSorted(sortedArray)) {
            delete this.array
        }
    }

    private isSorted(array: number[]): boolean {
        for (let i = 0; i < array.length - 2; i++) {
            if (array[i] > array[i + 1]) {
                return false
            }
        }

        return true
    }

    indexOf(value: number): number {
        let start = 0, end = this.array.length - 1

        do {
            let middle = Math.floor((start + end) / 2)
            if (this.array[middle] == value) {
                return middle
            } else if (this.array[middle] > value) {
                end = middle - 1
            } else {
                start = middle + 1
            }
        } while (start <= end)

        return -1
    }
}
