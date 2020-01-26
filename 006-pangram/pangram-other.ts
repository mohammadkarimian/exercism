class Pangram {
    phrase: String

    constructor(phrase: String) {
        this.phrase = phrase
    }

    isPangram() {
        const mySet = new Set(this.phrase
                                  .toLowerCase()
                                  .replace(/[^a-zA-Z]/g, ""))
        return mySet.size === 26
    }
}

export default Pangram