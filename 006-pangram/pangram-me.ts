class Pangram {
    constructor(private readonly text: string) { }

    isPangram(): boolean {
        let textBitSequence: number = 0;

        for (let index = 0; index < this.text.length; index++) {
            let character = this.text.charAt(index);

            if (this.isAlphabet(character)) {
                let alpabetBitCode = this.getAlpabetBitCode(character);
                textBitSequence |= alpabetBitCode;
            }
        }

        return (this.getPangramBitSequence() ^ textBitSequence) == 0;
    }

    private isAlphabet(character: string): boolean {
        return (character >= "a" && character <= "z") || (character >= "A" && character <= "Z")
    }

    private getAlpabetBitCode(alphabetCharacter: string) {
        return 1 << (alphabetCharacter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0))
    }

    private getPangramBitSequence(): number {
        let pangramBitSequence: number = 0;
        for (let charCode = "a".charCodeAt(0); charCode <= "z".charCodeAt(0); charCode++) {
            pangramBitSequence |= this.getAlpabetBitCode(String.fromCharCode(charCode));
        }

        return pangramBitSequence;
    }
}

export default Pangram;
