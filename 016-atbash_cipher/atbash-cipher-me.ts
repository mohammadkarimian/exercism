class AtbashCipher {
    encode = (plainText: string): string =>
        this.atbashAlgorithm(plainText)
            .match(/([a-z]|[0-9]){0,5}/g)
            ?.join(" ")
            .trim() || "";

    decode = (cipherText: string): string => this.atbashAlgorithm(cipherText);

    private atbashAlgorithm = (input: string): string =>
        input
            .replace(/,|\.|\s/g, "")
            .toLowerCase()
            .split("")
            .map(character => {
                if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)
                    return String.fromCharCode(
                        character.charCodeAt(0) + (2 * (109 - character.charCodeAt(0)) + 1)
                    );
                else return character;
            })
            .join("");
}

export default AtbashCipher;
