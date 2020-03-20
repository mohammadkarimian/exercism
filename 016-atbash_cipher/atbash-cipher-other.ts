export default class AtbashCipher {
    alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')

    encode(input: string): string {
        return input
                .toLowerCase()                                  // To lowercase
                .replace(/[^a-zA-Z0-9]/g, '')                   // Remove all none alphanumeric characters
                .split('')                                      // Split so we can process each character
                .map( (value) => {                              // Now map one character to its reverse
                    return value.match(/[0-9]/) ? value : this.alphabet[this.alphabet.length - this.alphabet.indexOf(value) - 1]
                })
                .reduce( (prev, curr, index) => {               // Insert space after each fifth character
                    return index > 0 && index % 5 === 0 ? prev + ' ' + curr : prev + curr
                }, '')
    }

    decode(input: string): string {
        return input
                .replace(/[\s]/g, '')                           // Replace spaces
                .split('')                                      // Split so we can process each character
                .map( (value) => {                              // Now map one character to its reverse
                    return value.match(/[0-9]/) ? value : this.alphabet[this.alphabet.length - this.alphabet.indexOf(value) - 1]
                })
                .join('')
    }
}