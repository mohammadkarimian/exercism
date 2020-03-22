class SimpleCipher {
    constructor(readonly key: string = "") {
        key.length == 0 ? (this.key = this.generateKey()) : (this.key = key);
    }

    encode(plainText: string) {
        return plainText
            .toLowerCase()
            .split("")
            .map((character, index) => {
                return String.fromCharCode(
                    ((character.charCodeAt(0) + this.key.charCodeAt(index % this.key.length)) % 97) % 26 + 97
                );
            })
            .join("");
    }

    decode(cipherText: string) {
        return cipherText
            .toLowerCase()
            .split("")
            .map((character, index) => {
                return String.fromCharCode(
                    ((character.charCodeAt(0) - this.key.charCodeAt(index % this.key.length) + 123) % 97) % 26 + 97
                );
            })
            .join("");
    }

    private generateKey(): string {
        let key = "";
        for (let i = 0; i < 100; i++) {
            key += String.fromCharCode(
                (Number((Math.random() * 100).toPrecision(1)) % 26) + 97
            );
        }
        return key;
    }
}

export default SimpleCipher;
